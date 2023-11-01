<script setup>
import highScore from "./data/high_score.json";
import AreaHeader from "./components/AreaHeader.vue";
import RoomItem from "./components/RoomItem.vue";

</script>


<template>
  <div class="app">
    <area-header :title="highScore.title" :subtitle="highScore.subtitle"></area-header>


    <div class="room-list">
      <template v-for="item in highScore.list" :key="item.id">
        
        <RoomItem :itemData="item"></RoomItem>
      </template>
    </div>
  </div>
</template>


<style lang="less" scoped>
.app {
  width: 1032px;
  margin: 0 auto;
   .room-list{
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
   }
}
</style>