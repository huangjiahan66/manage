import { def } from "@vue/shared";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./../components/Home.vue";
import Login from "./../components/Login.vue";
import Welecome from "./../components/Welecome.vue";
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
      {
        name: "login",
        path: "/login",
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
