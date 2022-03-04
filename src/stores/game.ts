import { defineStore } from "pinia";
import { query, getDoc, setDoc, getDocs, collection, doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/firebase/config"
import type { Goal_shot } from "@/utils";
import { global_props } from "./global_props";

let unsub_bootstrap_recording: any = null
let unsub_bootstrap_display: any = null

export const game_store = defineStore({
  id: "game",
  state: () => ({
    current_game: {
      team1: undefined,
      team2: undefined,
      counters: [],
      goal_shots: [] as Goal_shot[]
    },
    current_display_game: {
      team1: undefined,
      team2: undefined,
      counters: [],
      goal_shots: [] as Goal_shot[]
    },
  }),
  getters: {
    counter_recording: (state) => {

    }
  },
  actions: { 
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
      });
    },
    async save_goal_shot(goal_shot: Goal_shot) {
      const current_recording_game = global_props().$state.current_game
      goal_shot.period = current_recording_game.period
      this.current_game.goal_shots.push(goal_shot)
      await updateDoc(doc(db, "games_raw", current_recording_game.game_id as string ), {
        goal_shots: arrayUnion(goal_shot)
      }); 
    }
  },
});



// import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

// const washingtonRef = doc(db, "cities", "DC");

// // Atomically add a new region to the "regions" array field.
// await updateDoc(washingtonRef, {
//     regions: arrayUnion("greater_virginia")
// });

// // Atomically remove a region from the "regions" array field.
// await updateDoc(washingtonRef, {
//     regions: arrayRemove("east_coast")
// });