import { createRouter, createWebHistory } from "vue-router";
import MainContent from "@/views/MainContent.vue";
import MultiCounterView from "@/views/MultiCounterView.vue";
import GoalShots from "@/views/GoalShots.vue";
import FooView from "@/views/FooView.vue";
import GoalsViewCtrl from "@/views/GoalsViewCtrl.vue";
import GoalsView from "@/views/GoalsView.vue";
import AdminView from "@/views/AdminView.vue";
import CounterDisplayView from "@/views/CounterDisplayView.vue";
import CounterDisplayView2 from "@/views/CounterDisplayView2.vue";

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
        {
          path: "/non-blank-goalsview",
          name: "non-blank-goalsview",
          component:GoalsView,
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
      path: "/counter-display-view",
      name: "counter-display-view",
      component: CounterDisplayView2,
    },
    {
      path: "/counter-display-view-old",
      name: "counter-display-view-old",
      component: CounterDisplayView,
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
    {
      path: "/goalsviewctrl",
      name: "goals-view-ctrl",
      component:GoalsViewCtrl,
    },
  ],
});

export default router;
