import { defineStore } from "pinia";
import { query, getDoc, getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config"

const global_props_snapshot = await getDocs(query(collection(db, "global_props")));

// we only want the first doc, since there is only one global config
const firstDoc = global_props_snapshot.docs[0]
console.log("firstDoc", firstDoc.id, firstDoc.data())

// get updates on the first doc
const unsub = onSnapshot(doc(db, "global_props", firstDoc.id), (doc) => {
  const new_data = doc.data()
  // TODO: catch new_data not well formatted
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



// unsub();