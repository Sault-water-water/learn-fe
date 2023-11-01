import { defineStore } from 'pinia'
import { deleteUserById, postUsersListData, updateUser,postPageListData,deletePageData, addData,updateData } from '@/service/main/system/system'
import type { ISystemState } from './type'
import { addUser } from '@/service/main/system/system'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,

    pageList: [],
    pageTotalCount:0
  }),
  actions: {
    async postUsersListAction(quaryInfo: any = {}) {
      const usersList = await postUsersListData(quaryInfo)
      this.usersList = usersList.data.list
      this.usersTotalCount = usersList.data.totalCount
    },
    async deleteUserByIdAction(id: number) {
      const deleteResult = await deleteUserById(id)
      console.log(deleteResult)
      this.postUsersListAction()
    },
    async addUserAction(userInfo: any) {
      const addReault = await addUser(userInfo)

      this.postUsersListAction()

      return addReault
    },
    async updateUserAction(id: number, userInfo: any) {
      const updateResult = await updateUser(id, userInfo)
      this.postUsersListAction()

      return updateResult
    },

    // 对页面的抽取
    async postPageListAction(pageName: string, quaryInfo: any = {}) {

      const pageList = await postPageListData(pageName,quaryInfo)
      this.pageList = pageList.data.list
      this.pageTotalCount = pageList.data.list.length
    },
    async deletePageDataAction(pageName: string, id: number) {
      const deleteResult = await deletePageData(pageName,id)
      console.log(deleteResult)
      this.postPageListAction(pageName)
    },
    async addPageDataAction(pageName:string,userInfo: any) {
      const addReault = await addData(pageName,userInfo)

      this.postPageListAction(pageName)

      return addReault
    },
    async updatePageDataAction(pageName: string,id: number, userInfo: any) {
      const updateResult = await updateData(pageName,id, userInfo)

      this.postPageListAction(pageName)

      return updateResult
    },


  },
})

export default useSystemStore
