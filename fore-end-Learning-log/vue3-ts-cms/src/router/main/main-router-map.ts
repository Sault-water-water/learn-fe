const mainRoutesMap = [
  //系统总览
  {
    path: '/main/analysis/overview',
    component: () => import('@/views/main/analysis/overview/overview.vue'),
    children: [],
  },
  {
    name: 'dashboard',
    path: '/main/analysis/dashboard',
    component: () => import('@/views/main/analysis/dashboard/dashboard.vue'),
    meta: {
      requiresAuth: true,
      roles: ['超级管理员'],
    },
  },
  // 系统管理
  {
    path: '/main/system/menu',
    component: () => import('@/views/main/system/menu/menu.vue'),
  },
  {
    path: '/main/system/department',
    component: () => import('@/views/main/system/department/department.vue'),
  },
  {
    path: '/main/system/role',
    component: () => import('@/views/main/system/role/role.vue'),
  },
  {
    path: '/main/system/user',
    component: () => import('@/views/main/system/user/user.vue'),
  },
  // 商品中心
  {
    path: '/main/product/category',
    component: () => import('@/views/main/product/category/category.vue'),
  },
  {
    path: '/main/product/goods',
    component: () => import('@/views/main/product/goods/goods.vue'),
  },
  // 随便聊聊
  {
    path: '/main/story/chat',
    component: () => import('@/views/main/story/chat/chat.vue'),
  },
  {
    path: '/main/story/list',
    component: () => import('@/views/main/story/list/list.vue'),
  },
]


export default mainRoutesMap
