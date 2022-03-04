import { defineStore } from "pinia";
import { counter_store } from "@/stores/counter";
import { query, getDoc, setDoc, getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config"

interface Game {
  id: string
  team1: string
  team2: string
}

interface Current_game {
  game_id_display?: string
  period?: number
}

export const global_props = defineStore({
  id: "global_props",
  state: () => ({
    current_game: {
      game_id_display: undefined,
      period: undefined
    } as Current_game,
    games_raw: [] as Game[]
  }),
  getters: {},
  actions: {
    async set_period(val: number) {
      this.current_game.period = val
      console.log("set_current_game_period", this.current_game.period)
      await setDoc(doc(db, "global_props", firstDoc.id), {
        period: this.current_game.period,
      }, { merge: true });      
    },
    async set_game_id_display(val: string) {
      this.current_game.game_id_display = val
      console.log("set_current_game_for_display", this.current_game.game_id_display)
      await setDoc(doc(db, "global_props", firstDoc.id), {
        game_id_display: this.current_game.game_id_display,
      }, { merge: true });      
    },
  },
})

let firstDoc: any = null;

async function init() {
  const global_props_snapshot = await getDocs(query(collection(db, "global_props")));

  // we only want the first doc of global_props, since there is only one global config
  firstDoc = global_props_snapshot.docs[0]

  // get updates on the first doc of global_props
  const unsub = onSnapshot(doc(db, "global_props", firstDoc.id), (doc) => {
    const new_data = doc.data()
    // TODO: catch new_data not well formatted
    console.log("Newly received global_props: ", new_data);
    global_props().$state.current_game = { game_id_display: new_data.game_id_display,  period: new_data.period }

    // inform other stores
    counter_store().$state.game_id = new_data.game_id_display
    counter_store().$state.periode = new_data.period
  });

  const unsubscribe = onSnapshot(query(collection(db, "games_raw")), (querySnapshot) => {
    const games_formatted =  querySnapshot.docs.map(e=>({
      id: e.id,
      ...e.data()
    }))
    console.log("Newly received games: ", games_formatted);
    global_props().$state.games_raw = games_formatted as Game[]
  });

}


init();