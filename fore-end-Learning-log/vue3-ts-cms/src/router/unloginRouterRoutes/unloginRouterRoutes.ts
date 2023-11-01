import { createWebHashHistory } from 'vue-router'

const unloginRouterRoutes = [
  {
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/Main.vue'),
  },
  {
    path: '/access-denied',
    component: () => import('@/views/access-denied/access-denied.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/notFound/NotFound.vue'),
  },
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
  },
]

export default unloginRouterRoutes
