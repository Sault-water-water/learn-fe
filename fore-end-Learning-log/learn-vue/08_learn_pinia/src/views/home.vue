<script setup>
import useCounter from '../stores/counter';
import { storeToRefs } from 'pinia'
const counterStore = useCounter()
function increment() {
  counterStore.count++
}
function reset() {
  counterStore.$reset()

  // 一次行修改多个状态
  // counterStore.$patch({
  // counter:100
  // name:'kobe'
  // })

  // 替换state为新的对象
  // userStore.$state={} 
}
const { count } = storeToRefs(counterStore)
</script>


<template>
  <div class="app">
    <h1>home:{{ counterStore.count }}</h1>
    <button @click="increment">++</button>
    <button @click="reset">reset</button>
    count: {{ count }}
    doubles:{{ counterStore.doubleCount }}
    <h2>friend222:{{ counterStore.findFriendsbyId(222) }}</h2>
    <h1>userInfo:{{ counterStore.otherStoreInfo }}</h1>
  </div>
</template>


<style scoped></style>