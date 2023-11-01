import { createRouter, createWebHashHistory } from 'vue-router';

// import Home from '../Views/Home.vue'
// import About from '../Views/About.vue'


// 路由懒加载
// const Home=()=>import(/*webpackChunkName:'Home'*/'../Views/Home.vue')
// const About=()=>import(/*webpackChunkName:'About'*/'../Views/About.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name:'home',

      path: '/home',
      component: () => import(/*webpackChunkName:'Home'*/'../Views/Home.vue'),
      meta: {
        aaa: 'bbb'
      },
      children: [
        {
          path: '/home',
          redirect: '/home/recommend',
        },
        {
          path: 'recommend',
          component: () => import('../Views/HomeRecommend.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      component: () => import(/*webpackChunkName:'About'*/'../Views/About.vue')
    },
    {
      path: '/user/:id',
      component: () => import('../Views/User.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../Views/NotFound.vue')
    },
    {
      path: '/login',
      component:()=>import('../Views/Login.vue')
    },
    {
      path: '/order',
      component:()=>import('../Views/Order.vue')
      
    }
  ]
})

let isAdmin = true
if (isAdmin) {
  router.addRoute({
    path: '/admin',
    component: () => import('../Views/Admin.vue')
  })
  router.addRoute('home', {
    path: 'vip',
    component:()=>import('../Views/HomeVip.vue')
  })
}

console.log(router.getRoutes());

router.beforeEach((to,from) => {
  // if (to.path !== '/login') {
  //   return '/login'
  // }


  const token=localStorage.getItem('token')
  if (!token && to.path === '/order') {
    return '/login'
  }
})

export default router