import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import initDynamicRouter from '@/hooks/initDynamicRouter'
import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN, ROUTESMAP, USER_INFO } from '@/global/constants'
import router from '@/router'
import mapRoleToRoutes from '@/utils/mapRoleToRoutes'
import mainRoutesMap from '@/router/main/main-router-map'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

interface record {
  meta?: {
    roles: []
  }
}

const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache(USER_INFO) ?? {},
    userMenus: localCache.getCache('userMenus') ?? [],
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.登录,获取token
      const loginResult = await accountLoginRequest(account)
      const id = loginResult.data.id
      const name = loginResult.data.name
      this.token = loginResult.data.token

      // 2.本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 2.获取登录用户的详细信息(role信息)
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      // 3.根据角色请求用户的权限(菜单menus)
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data
      this.userMenus = userMenus

      // 4.进行本地缓存
      localCache.setCache(USER_INFO, userInfo)
      localCache.setCache('userMenus', userMenus)

      // 页面跳转
      await router.replace('/main')

      // 5.登录成功后刷新页面,重载路由
      location.reload()
    },
  },
})

export default useLoginStore
