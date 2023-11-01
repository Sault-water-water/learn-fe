import { LOGIN_TOKEN, USER_INFO } from '@/global/constants'
import { localCache } from '@/utils/cache'
import mainRoutesMap from '@/router/main/main-router-map'
import { createRouter, createWebHashHistory } from 'vue-router'
import { ref } from 'vue'
import { ROUTESMAP } from '@/global/constants'
import unloginRouterRoutes from '@/router/unloginRouterRoutes/unloginRouterRoutes'

import mapRoleToRoutes from '@/utils/mapRoleToRoutes'

import type { RouterOptions, RouteRecordRaw } from 'vue-router'

let routerObj: any = { history: createWebHashHistory() }
const userRole = localCache.getCache(USER_INFO)?.role.name
let loginRouterRoutes: any[] = []

console.log('++++++++++++++++++路由初始化++++++++++++++++++++++')
if (!userRole) {
  routerObj = {
    ...routerObj,
    routes: unloginRouterRoutes,
  }
} else {
  loginRouterRoutes = mapRoleToRoutes(userRole, mainRoutesMap, 'main')
  routerObj = {
    ...routerObj,
    routes: loginRouterRoutes,
  }
}

const router = createRouter(routerObj)

// 导航守卫
router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)

  // 不使用动态路由,用导航守卫阻止跳转权限页面
  // const userRole = localCache.getCache(USER_INFO)?.role.name
  // const requiresAuth = to.meta.requiresAuth
  // const requiredRoles: string[] = to.meta.roles as string[]

  if (to.path !== '/login' && !token) {
    return '/login'
  }
  // else if (requiresAuth && !requiredRoles.includes(userRole)) {
  //   return '/access-denied' // 用户角色不匹配，跳转到权限拒绝页
  // }
  else if (to.path === '/main') {
    const mainRoute = router.options.routes.find((route) => route.name === 'main')
    const firstChild = mainRoute?.children?.[0]
    return firstChild
  }
})

export default router
export { loginRouterRoutes }
