<template>
  <div class="app">
    <router-view/>
    <!-- <tab-bar v-if="!router.meta.hideTabber" /> -->
    <tab-bar/>
  </div>
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue"
import { useRoute } from "vue-router";

// router :当前活跃对象,默认是响应式
const router = useRoute()


</script>

<style scoped>

</style>
