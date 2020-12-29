import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/layout",
    name: "Layout",
    component: () => import("../layout/index.vue")
  },
  {
    path: "/login",
    name: "About",
    component: () => import("../views/login/login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
