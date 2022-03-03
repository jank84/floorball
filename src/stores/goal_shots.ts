import { defineStore } from "pinia";
import { Goal_shot_outcome } from "@/utils"

interface Goal_shot {
  team?: boolean
  kind?: Goal_shot
  start_x?: number
  start_y?: number
  timestamp?: Date 
}

export const use_goal_shot_store = defineStore({
  id: "goal_shot",
  state: () => ({
    last_goal_shot_data: {
      team: null, // boolean
      kind: null, // Goal_shot
      start_x: null, // number 
      start_y: null, // number
      timestamp: null // timestamp
    },
    goal_shot_data: [],
  }),
  getters: {},
  actions: {},
});


// import { generateFakeData, Item } from "@/models/item.model";
// import { defineStore } from "pinia";

// export type RootState = {
//   items: Item[];
// };

// export const useMainStore = defineStore({
//   id: "mainStore",
//   state: () =>
//     ({
//       items: [],
//     } as RootState),