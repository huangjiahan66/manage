import { def } from "@vue/shared";
import { createRouter, createWebHashHistory } from "vue-router";

import Welecome from "./../views/Welecome.vue";
import Home from "./../components/Home.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    redirect: "welecome",
    children: [
      {
        name: "welecome",
        path: "/welecome",
        component: Welecome,
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () => import("./../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
