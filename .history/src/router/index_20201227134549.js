import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("../layout/index.vue")
  },
  {
    path: "/layout",
    name: "Layout",
    component: () => import("../layout/index.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
