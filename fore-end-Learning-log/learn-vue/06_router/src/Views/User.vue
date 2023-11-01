<script setup>
import { onBeforeRouteUpdate,useRoute } from 'vue-router';
const route=useRoute()
console.log(route.params.id);

onBeforeRouteUpdate((to, from) => {
  console.log(from.params.id);
  console.log(to.params.id);
})
</script>


<template>
<h1>User:{{ $route.params.id }}</h1>
</template>


<style scoped>

</style>