<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';


import CityGroup from './cpns/city-group.vue'
// 搜索框
const searchValue = ref('')
const router = useRouter()
const cancelClick = () => {
  router.back()
}

// 标签页
const tabActive = ref(0)


// const allCity=ref()
// getCityAll().then(res => {
//   allCity.value=res.data
// })

// 标签页内容
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

const currentCity = computed(() => allCities.value[tabActive.value])

</script>


<template>
  <div class="city top-page">
    <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick"></van-search>

    <van-tabs class="top" v-model:active="tabActive" color="#ff9854" line-height="3">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title" :name="key">

          <!-- 这样渲染效率较慢,因为在tabActive 变换后要重新渲染数据.先遍历一遍用v-show效果更好 -->
          <!-- <city-group :group-data="currentCity"></city-group> -->



        </van-tab>
      </template>
    </van-tabs>



    <template v-for="(value, key, index) in allCities">
      <city-group v-show="tabActive === key" :group-data="value"></city-group>
    </template>
  </div>
</template> 


<style lang="less" scoped>
  .top{
    position: relative;
    z-index: 9;
  }
</style>