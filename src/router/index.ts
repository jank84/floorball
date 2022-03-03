import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainContent from "../views/MainContent.vue";
import CounterTest from "../views/CounterTest.vue";
import GoalShots from "../views/GoalShots.vue";
import FooView from "../views/FooView.vue";
import GoalsView from "../views/GoalsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainContent,
      children: [
        {
          path: "/counter-test",
          name: "counter-test",
          component: CounterTest,
        },
        {
          path: "/home",
          name: "home",
          component: HomeView,
        },
        {
          path: "/goal-shots",
          name: "goal-shots",
          component:GoalShots,
        },
      ]
    },
    // ⬇ without nav ⬇
    {
      path: "/blank/counter-test",
      name: "blank-counter-test",
      component: CounterTest,
    },
    {
      path: "/blank/home",
      name: "blank-home",
      component: HomeView,
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
