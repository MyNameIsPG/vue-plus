import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/home.vue')
      },
      {
        path: '/tinymce',
        name: 'Tinymce',
        component: () => import('../views/tinymce/tinymce.vue')
      },
      {
        path: '/markdown',
        name: 'Markdown',
        component: () => import('../views/markdown/markdown.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
