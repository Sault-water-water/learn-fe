
import { getEntireDepartments, getEntireRoles } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState{
  entireRoles: any[],
  entireDepartments: any[],
}

const useMainStore = defineStore('main', {
  state: ():IMainState => ({
    entireRoles: [],
    entireDepartments: [],
  }),
  actions: {
    async fetchEntireDataAction() {

      const rolesResult = await getEntireRoles()
      const departmentsResult = await getEntireDepartments()
      this.entireDepartments = departmentsResult.data.list
      this.entireRoles=rolesResult.data.list

    }

  }
})


export default useMainStore
