import { defineStore } from "pinia";
import { query, getDoc, getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config"

const global_props_snapshot = await getDocs(query(collection(db, "global_props")));

const firstDoc = global_props_snapshot.docs[0]
console.log("firstDoc", firstDoc.id, firstDoc.data())


const unsub = onSnapshot(doc(db, "global_props", firstDoc.id), (doc) => {
  const new_data = doc.data()
  console.log("Current data: ", new_data);
  global_props().$state = { current_game_for_display: new_data.current_game_for_display,  current_game_period: new_data.current_game_period }
});

export const global_props = defineStore({
  id: "global_props",
  state: () => ({
    current_game_for_display: firstDoc.data().current_game_for_display,
    current_game_period: firstDoc.data().current_game_period
  }),
  getters: {},
  actions: {},
})



