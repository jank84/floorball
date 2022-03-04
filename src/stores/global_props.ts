import { defineStore } from "pinia";
import { query, getDoc, setDoc, getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config"

const global_props_snapshot = await getDocs(query(collection(db, "global_props")));

// we only want the first doc of global_props, since there is only one global config
const firstDoc = global_props_snapshot.docs[0]
console.log("firstDoc", firstDoc.id, firstDoc.data())

// get updates on the first doc of global_props
const unsub = onSnapshot(doc(db, "global_props", firstDoc.id), (doc) => {
  const new_data = doc.data()
  // TODO: catch new_data not well formatted
  console.log("New received data: ", new_data);
  global_props().$state.current_game = { game_id_display: new_data.current_game_for_display,  period: new_data.current_game_period }
});

// const games_raw_snapshot = await getDocs(query(collection(db, "games_raw")));

// games_raw_snapshot.forEach((g)=> console.log(g.id + " -> ", g.data()))

// global_props().$state

export const global_props = defineStore({
  id: "global_props",
  state: () => ({
    current_game: {
      game_id_display: firstDoc.data().current_game_for_display,
      period: firstDoc.data().current_game_period
    }

  }),
  getters: {},
  actions: {
    async set_current_game_period(val: number) {
      this.current_game.period = val
      console.log("set_current_game_period", this.current_game.period)
      await setDoc(doc(db, "global_props", firstDoc.id), {
        current_game_period: this.current_game.period,
      }, { merge: true });      
    },
    async current_game_for_display(val: number) {
      this.current_game.game_id_display = val
      console.log("set_current_game_for_display", this.current_game.game_id_display)
      await setDoc(doc(db, "global_props", firstDoc.id), {
        current_game_for_display: this.current_game.game_id_display,
      }, { merge: true });      
    },
  },
})



// unsub();