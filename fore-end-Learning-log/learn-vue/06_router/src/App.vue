<script setup>
import router from './router';

function btnClick() {
  router.push({
    path: '/about',
    query: {
      name: 'why',
      age: 18
    }
  })  
}
</script>


<template>
  <div class="app">
    <h1>app</h1>
    <router-link to="/home">home</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/User/123">123</router-link>
    <router-link to="/User/321">321</router-link>
    <router-link to="/order">order</router-link>
    <!-- <router-link to="/about" replace>关于</router-link> -->

    <button @click="btnClick()">关于(编程式导航)</button>

    <router-view></router-view>
  </div>
</template>


<style scoped>
.router-link-active {
  
  font-size: larger;
  color: red;

}
</style>