import { createRouter, createWebHistory } from "vue-router";
import MainContent from "@/views/MainContent.vue";
import MultiCounterView from "@/views/MultiCounterView.vue";
import GoalShots from "@/views/GoalShots.vue";
import FooView from "@/views/FooView.vue";
import GoalsView from "@/views/GoalsView.vue";
import AdminView from "@/views/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainContent,
      children: [
        {
          path: "/multi-counterview",
          name: "multi-counterview",
          component: MultiCounterView,
        },
        {
          path: "/goal-shots",
          name: "goal-shots",
          component:GoalShots,
        },
        {
          path: "/admin-view",
          name: "admin-view",
          component:AdminView,
        },
      ]
    },
    // ⬇ without nav ⬇
    {
      path: "/blank/multi-counterview",
      name: "blank-multi-counterview",
      component: MultiCounterView,
    },
    {
      path: "/blank/goal-shots",
      name: "blank-goal-shots",
      component:GoalShots,
    },
    {
      path: "/fooview",
      name: "fooview",
      component:FooView,
    },
    {
      path: "/goalsview",
      name: "goalsview",
      component:GoalsView,
    },
  ],
});

export default router;
