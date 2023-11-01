
import { localCache } from "@/utils/cache"
import { USER_INFO } from "@/global/constants"
import routerMap from "@/router/main/main-router-map"
import router from "@/router"


export default function initDynamicRouter() {
  // 根据用户权限匹配路由菜单
  const userRole = localCache.getCache(USER_INFO)?.role.name

  // 2.动态添加路由

  if (userRole) {
    routerMap.forEach((record) => {
      if (!record.name || (record.meta as { roles: string[] }).roles.includes(userRole)) {
        router.addRoute('main', record)
      }
    })
  }

  console.log('刷新', router.getRoutes())
}
