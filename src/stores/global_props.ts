import { defineStore } from "pinia";


export const global_props = defineStore({
  id: "global_props",
  state: () => ({

    last_goal_shot_data: {
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




current_game_for_display 1
current_game_period 0 