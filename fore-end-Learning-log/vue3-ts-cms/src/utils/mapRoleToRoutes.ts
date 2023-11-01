
import unloginRouterRoutes from '@/router/unloginRouterRoutes/unloginRouterRoutes'
import type { RouteRecordNormalized } from 'vue-router'

const loginRouterRoutes: any = unloginRouterRoutes

/**
 * 根据权限添加子路由
 * @param userRole 权限信息
 * @param sCldMap 完整子路由数组
 * @param parentName 目的路由名
 * @returns
 */


export default function mapRoleToRoutes(userRole: string, sCldMap: any, parentName: string) {

  // 按权限添加子路由
  const dMap: RouteRecordNormalized[] = []

  sCldMap.forEach((record: RouteRecordNormalized) => {
    if (!record.name || (record.meta as { roles: string[] }).roles.includes(userRole)) {
      dMap.push(record)
    }
  })

  // 从最外层路由找到要修改的路由对象的索引
  const index = loginRouterRoutes.findIndex(
    (route: RouteRecordNormalized) => route.name === parentName,
  )

  // 如果找到了路由对象，修改它的 children 属性
  if (index !== -1) {
    loginRouterRoutes[index].children=dMap
  }


  return loginRouterRoutes
}
