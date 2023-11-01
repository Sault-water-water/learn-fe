import { defineStore } from 'pinia'
import  userUser  from './user'
const useCounter = defineStore('counter', {
  state: () => ({
    count: 99,
    friends: [
      {
        id: 111,
        name: 'aaa'
      },
      {
        id: 222,
        name: 'bbb'
      },
      {
        id: 333,
        name: 'ccc'
      },
    ]
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    findFriendsbyId(state) {
      return id => state.friends.find(friend => friend.id === id)
    },
    otherStoreInfo(state) {
      const userStore = userUser()
      return `name:${userStore.name}`
    }
  },
  actions: {
    action() {

    }
  }
})

export default useCounter