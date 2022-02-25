import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CounterTest from "../views/CounterTest.vue";
import TouchTest3 from "../views/TouchTest3.vue";
import TouchTest4 from "../views/TouchTest4.vue";

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
      path: "/touch-test",
      name: "touch-test",
      // @ts-ignore // ignore for now, since its not valid typescript but js
      component: () => import("../views/TouchTest.vue"),
    },
    {
      path: "/touch-test4",
      name: "touch-test4",
      component: TouchTest4,
    },
    {
      path: "/touch-test3",
      name: "touch-test3",
      component: TouchTest3,
    },
  ],
});

export default router;
