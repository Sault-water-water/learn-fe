import { defineStore } from "pinia";

const useUser = defineStore('user', {
  state:()=> ({
    name: 'why',
    age: 18,
    banners: [],
    recommends: []
  }),
  actions: {
    async fetchHomeMultidata() {
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = await res.json()
      this.banners=data.data.banner.list
    }
  }

})

export default useUser
