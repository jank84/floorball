import { defineStore } from "pinia";
import { Goal_shot } from "@/utils"

export const use_goal_shot_store = defineStore({
  id: "goal_shot",
  state: () => ({
    last_goal_shot_data: {
      team: null, // boolean
      kind: null, // Goal_shot
      start_x: null, // number 
      start_y: null, // number
      timestamp: null // timestamp (+ new Date())
    },
  }),
  getters: {},
  actions: {},
});
