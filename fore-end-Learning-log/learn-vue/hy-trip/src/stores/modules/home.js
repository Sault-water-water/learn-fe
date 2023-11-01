import { defineStore } from "pinia";
import hyRequest from '@/services/request/index'
import { getHomeHotSuggests,getHomeCategories,getHotHouselist } from "@/services";


const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],

    currentPage:1,
    houselist:[]
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests=res.data

    },
    async fetchHomeCategories() {
      const res = await getHomeCategories()
      this.categories=res.data

    },

    async fetchHotHouselist() {
      const res = await getHotHouselist(this.currentPage++)
      this.houselist.push(...res.data)
    }
  }
})

export default useHomeStore