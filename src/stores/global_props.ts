import { defineStore } from "pinia";
import { query, getDoc, setDoc, getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config"

interface Game {
  team1: string
  team2: string
}

interface Current_game {
  game_id_display?: number
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
    async set_game_id_display(val: number) {
      this.current_game.game_id_display = val
      console.log("set_current_game_for_display", this.current_game.game_id_display)
      await setDoc(doc(db, "global_props", firstDoc.id), {
        game_id_display: this.current_game.game_id_display,
      }, { merge: true });      
    },
  },
})

const global_props_snapshot = await getDocs(query(collection(db, "global_props")));

// we only want the first doc of global_props, since there is only one global config
const firstDoc = global_props_snapshot.docs[0]
// console.log("firstDoc", firstDoc.id, firstDoc.data())

// get updates on the first doc of global_props
const unsub = onSnapshot(doc(db, "global_props", firstDoc.id), (doc) => {
  const new_data = doc.data()
  // TODO: catch new_data not well formatted
  console.log("New received data: ", new_data);
  global_props().$state.current_game = { game_id_display: new_data.game_id_display,  period: new_data.period }
});

const unsubscribe = onSnapshot(query(collection(db, "games_raw")), (querySnapshot) => {
  console.log("games: ", querySnapshot.docs.map(e=>e.data()));
  global_props().$state.games_raw = querySnapshot.docs.map(e=>e.data()) as Game[]
});





// unsub();