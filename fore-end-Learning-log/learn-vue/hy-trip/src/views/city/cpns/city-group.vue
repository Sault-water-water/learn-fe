<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';



const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>


<template>
  <van-index-bar class="content" :index-list="indexList">

    <van-index-anchor index="热门"></van-index-anchor>
    <div class="list">
      <template v-for="(city, index) in groupData.hotCities">
        <div @click="cityClick(city)" class="city">{{ city.cityName }}</div>
      </template>

    </div>


    <template v-for="(group, index) in groupData.cities" :key="index">
      <van-index-anchor :index="group.group"></van-index-anchor>
      <template v-for="(city, indey) in group.cities" :key="indey">
        <van-cell @click="cityClick(city)" :title="city.cityName"></van-cell>
      </template>
    </template>

  </van-index-bar>

  <!-- <div class="content">
    <template v-for="item in groupData.cities">

      <div>
        {{ item.group }}

        <template v-for="iten in item.cities ">
          {{ iten.cityName }}
        </template>
      </div>

    </template>
  </div> -->
</template>


<style lang="less" scoped>
.list {

  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {

    margin: 6px 0;
    width: 70px;
    height: 28px;


    text-align: center;
    line-height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
  }

}

.content {
  height: calc(100vh - 98px);

  padding-top: 5px;

  overflow-y: auto;
}
</style>