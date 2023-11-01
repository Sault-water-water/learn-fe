<template>
  <div class="home">
    <home-nav-bar />

    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <home-search-box></home-search-box>

    <home-categories></home-categories>

    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar />
    </div>

    <homeContent />



  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue'
import { computed } from 'vue';
import useScroll from '@/hooks/useScroll.js'
import throttle from '@/utils/throttle'
import SearchBar from '@/components/search-bar/search-bar.vue'

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchHomeCategories()
homeStore.fetchHotHouselist()

const throlledFetchList=throttle(homeStore.fetchHotHouselist)

const { scrollTop } = useScroll(throlledFetchList)

const isShowSearchBar = computed(() => {
  
  return scrollTop.value >= 100
})



</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

.moreBtn {
  margin-bottom: 50px;
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}

</style>
