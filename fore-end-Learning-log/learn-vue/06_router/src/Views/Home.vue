<script setup>
function logutClick() {
  localStorage.removeItem('token');
}
</script>


<template>
home
<router-view></router-view>
<router-link to="/home/recommend">recommend</router-link>
<button @click="logutClick">退出登入</button>
</template>


<style scoped>

</style>