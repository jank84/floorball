import { defineStore } from "pinia";
import { query, getDoc, setDoc, getDocs, collection, doc, onSnapshot, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "@/firebase/config"
import type { Goal_shot } from "@/utils";
import { global_props } from "./global_props";

let unsub_bootstrap_recording: any = null
let unsub_bootstrap_display: any = null

interface Counter {
  name: string
  team: string
  counters: number[]
}

interface Game_status {
  team1?: string
  team2?: string
  counters:Counter[],
  goal_shots: Goal_shot[]
}

// TODO: legende v
// TODO: current game select -> text v
// TODO: team namen über goals view. attacker in over enemy half + periode v
// TOD0: miss passes v
// undo goals v 
// TODO: counter view v
// TODO: change of possesion x
// TODO: add urls to admin v

export const game_store = defineStore({
  id: "game",
  state: () => ({
    current_game: {
      team1: undefined,
      team2: undefined,
      counters: [],
      goal_shots: []
    } as Game_status,
    current_display_game: {
      team1: undefined,
      team2: undefined,
      counters: [],
      goal_shots: []
    } as Game_status,
  }),
  getters: {
    get_recording_counter: (state) => {
      return (counter_name: string, team_name: string, periode: number) => get_counter(counter_name, team_name, global_props().current_game.period as number, state.current_game)
    },
    get_display_counter: (state) => {
      return (counter_name: string, team_name: string, periode: number) => get_counter(counter_name, team_name, global_props().current_display_game.period as number, state.current_display_game)
    },
  },
  actions: {
    increment_counter(counter_name: string, team_name: string) {
      this.increment_counter_amount(counter_name, team_name, 1)
    },
    decrement_counter(counter_name: string, team_name: string) {
      this.increment_counter_amount(counter_name, team_name, -1)
    },
    async increment_counter_amount(counter_name: string, team_name: string, amount: number) {

      // get counter by counter_name and team_name 
      const current_counter = this.current_game.counters
        .find(counter => counter.name == counter_name && counter.team == team_name)
      if (!current_counter) {
        console.error("increment_counter fail. counter_name team_name",counter_name, team_name)
        return
      }
      const current_period = global_props().current_game.period as number
      current_counter.counters[current_period] += amount

      // save to FS
      const current_recording_game = global_props().$state.current_game
      await updateDoc(doc(db, "games_raw", current_recording_game.game_id as string ), {
        counters: this.current_game.counters
      }); 


    },
    async bootstrap_recording(game_id: string) {
      unsub_bootstrap_recording = onSnapshot(doc(db, "games_raw", game_id), (doc) => {
        const new_data = doc.data()
        const game_id_from_store = global_props().current_game.game_id as string

        if (game_id_from_store != doc.id) {
          // wrong, outdated subscription; remove
          unsub_bootstrap_recording()
          return
        }
        
        // TODO: catch new_data not well formatted
        console.log("Newly received bootstrap_recording data: ", game_id, game_id_from_store, new_data);
        this.current_game.goal_shots = new_data.goal_shots || []
        this.current_game.team1 = new_data.team1
        this.current_game.team2 = new_data.team2
        this.current_game.counters = new_data.counters || counter_factory(new_data.team1, new_data.team2)
      });
    },
    async bootstrap_display(game_id: string) {
      unsub_bootstrap_display = onSnapshot(doc(db, "games_raw", game_id), (doc) => {
        const new_data = doc.data()
        const game_id_from_store = global_props().current_display_game.game_id as string

        if (game_id_from_store != doc.id) {
          // wrong, outdated subscription; remove
          unsub_bootstrap_display()
          return
        }

        // TODO: catch new_data not well formatted
        console.log("Newly received bootstrap_display data: ", game_id, game_id_from_store, new_data);
        this.current_display_game.goal_shots = new_data.goal_shots || []
        this.current_display_game.team1 = new_data.team1
        this.current_display_game.team2 = new_data.team2
        this.current_display_game.counters = new_data.counters || counter_factory(new_data.team1, new_data.team2)
      });
    },
    async save_goal_shot(goal_shot: Goal_shot) {
      const current_recording_game = global_props().$state.current_game
      goal_shot.period = current_recording_game.period
      this.current_game.goal_shots.push(goal_shot)
      await updateDoc(doc(db, "games_raw", current_recording_game.game_id as string ), {
        goal_shots: arrayUnion(goal_shot)
      }); 
    },
    async undo_goal_shot() {
      const current_recording_game = global_props().$state.current_game
      console.log("current_recording_game", current_recording_game)
      // goal_shot.period = current_recording_game.period
      const last_elem = this.current_game.goal_shots.pop()
      await updateDoc(doc(db, "games_raw", current_recording_game.game_id as string ), {
        goal_shots: arrayRemove(last_elem)
      });


    },
  },
});

function counter_factory(team1: string, team2: string) {
  return [
    {name: "passing", team: team1, counters: [0,0,0,0]},
    {name: "passing", team: team2, counters: [0,0,0,0]},
    {name: "passing misses", team: team1, counters: [0,0,0,0]},
    {name: "passing misses", team: team2, counters: [0,0,0,0]},
    {name: "bullies", team: team1, counters: [0,0,0,0]},
    {name: "bullies", team: team2, counters: [0,0,0,0]},
  ]
}

function get_counter(counter_name: string, team_name: string, periode: number, game_status: Game_status){
    const current_counter = game_status.counters
      .find(counter => counter.name == counter_name && counter.team == team_name)
    if (!current_counter) {
      console.error("increment_counter fail. counter_name team_name",counter_name, team_name)
      return -1
    }
    if (periode == 4) {
      // period == 4 --> get sum of all periods
      return current_counter.counters.reduce((a,b) => a+b )
    } else {
      return current_counter.counters[periode]
    }
}
