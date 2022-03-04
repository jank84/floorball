import { defineStore } from "pinia";
import { query, getDoc, setDoc, getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config"

export const game_store = defineStore({
  id: "game",
  state: () => ({
    current_counter: {
      game_id: undefined,
      team1: undefined,
      team2: undefined,
      counters: [],
      goal_shots: []
    },
  }),
  getters: { },
  actions: { 
    async bootstrap(game_id: string) {
      console.log("bootstrap game_id:", game_id)

      const unsub = onSnapshot(doc(db, "games_raw", game_id), (doc) => {
        const new_data = doc.data()
        // TODO: catch new_data not well formatted
        console.log("Newly received game data: ", new_data);
        // global_props().$state.current_game = { game_id: new_data.game_id,  period: new_data.period }
    
        // global_props().$state.counter_types = new_data.counter_types
        
    
        // // inform other stores
        // counter_store().$state.current_counter.game_id = new_data.game_id
        // counter_store().$state.current_counter.periode = new_data.period
    
    
        // counter_store().$state.current_counter.game_id = new_data.game_id
        // counter_store().$state.current_counter.periode = new_data.period
    
        // // game_store().$state.current_counter.game_id = new_data.game_id
        // game_store().bootstrap(new_data.game_id)
      });
    },
  },
});
