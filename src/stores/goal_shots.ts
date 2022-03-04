import { defineStore } from "pinia";
import type { Goal_shot } from "@/utils"


export const use_goal_shot_store = defineStore({
  id: "goal_shot",
  state: () => ({
    last_goal_shot_data: {
      game_id: undefined,
      team: undefined,
      kind: undefined,
      x: undefined,
      y: undefined,
      timestamp: undefined
    } as Goal_shot,
    goal_shot_data: [] as Goal_shot[],
  }),
  getters: {},
  actions: {},
})
