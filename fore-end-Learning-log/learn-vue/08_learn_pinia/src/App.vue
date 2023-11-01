<script setup>
import home from '@/views/home'
import useUser from './stores/user';
const userStore = useUser()
userStore.fetchHomeMultidata()
</script>


<template>
  <div class="app">
    <home></home>
    <template v-for="item in userStore.banners">
      <li>{{ item.title }}</li>
    </template>
  </div>
</template>


<style scoped></style>