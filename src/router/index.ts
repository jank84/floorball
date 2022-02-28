import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CounterTest from "../views/CounterTest.vue";
import GoalShots from "../views/GoalShots.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: CounterTest,
    },
    {
      path: "/counter-test",
      name: "counter-test",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
      // @ts-ignore // ignore for now, since its not valid typescript but js
      component:GoalShots,
    },
  ],
});

export default router;
