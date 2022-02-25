import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CounterTest from "../views/CounterTest.vue";
import TouchTest2 from "../views/TouchTest2.vue";
import TouchTest3 from "../views/TouchTest3.vue";

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
      path: "/touch-test2",
      name: "touch-test2",
      component: TouchTest2,
    },
    {
      path: "/touch-test3",
      name: "touch-test3",
      component: TouchTest3,
    },
  ],
});

export default router;
