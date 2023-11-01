<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formatMonthDay, formatDuringDay } from '@/utils/format_date'
import { computed, ref } from 'vue';
import useHomeStore from "@/stores/modules/home"
import useMainStore from '@/stores/modules/main';








// =================================================================

// 定位当前城市
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res);
  }, err => {
    console.log('error', err)
  })
}


// 选择城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
const router = useRouter()
const cityClick = () => {
  router.push('/city')
}


// =================================================================


// 日期选择
const mainStore = useMainStore()

const { startDate, endDate } = storeToRefs(mainStore)


const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const duringDay = computed(() => formatDuringDay(startDate.value, endDate.value))

const showCalendar = ref(false)

const onConfirm = (values) => {
  const [start, end] = values;
  showCalendar.value = false
  startDate.value = start
  endDate.value = end
}


// =================================================================

const homeStore = useHomeStore()

const { hotSuggests } = storeToRefs(homeStore)
</script>


<template>
  <div class="search-box">
    <div class="location">
      <div @click="cityClick" class="city">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>

  <!-- 日期信息-->
  <div class="date-range" @click="showCalendar = true">
    <div class="info-item start">
      <span class="tip">入住</span>
      <span>{{ startDateStr }}</span>
    </div>
    <div class="stay info-item">
      <span class="tip">共{{ duringDay }}晚</span>
    </div>
    <div class="end info-item">
      <span class="tip">离店</span>
      <span>{{ endDateStr }}</span>
    </div>
  </div>


  <!-- 日历 -->
  <van-calendar color="#ff9854" v-model:show="showCalendar" type="range" @confirm="onConfirm" />

  <!-- 价格/人数选择 -->
  <div class="section price-counter ">
    <div class="start">价格不限</div>
    <div class="end">人数不限</div>
  </div>
  <!-- 关键字 -->
  <div class="section">关键字/位置/民宿名</div>


  <!-- 热门建议 -->
  <div class="hot-suggests">
    <template v-for="(item, index) in hotSuggests" :key="index">
      <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
        {{ item.tagText.text }}
      </div>
    </template>
  </div>


  <!-- 搜索按钮 -->
  <div class="section search-btn">
    <div class="btn" @click="searchBtnClick">开始搜索</div>
  </div>
</template>


<style lang="less" scoped>
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {

    width: 70px;
    height: 28px;


    text-align: center;
    line-height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {

      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}


.section {
  margin-left: 15px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    text-align: center;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  margin-top: 10px;

  display: flex;
  flex-flow: nowrap;
  justify-content: space-evenly;
  background-color: var(--van-gray-1);
  border: 2px solid transparent;
  box-shadow: 0 0 4px rgba(200, 200, 200, 0.33);

  .info-item {


    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 31%;

    border-radius: 5%;

    .tip {
      color: #999;
    }
  }
}


.hot-suggests {

  display: flex;

  flex-flow: wrap;
  padding: 0 25px;

  .item {
    margin: 3px 4px;
    border-radius: 14px;

  }
}


.search-btn {
  margin-top: 10px;

  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>