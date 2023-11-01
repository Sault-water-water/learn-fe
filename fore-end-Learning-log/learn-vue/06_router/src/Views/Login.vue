<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

function loginClick() {

  localStorage.setItem('token', 'aaabbbb123456')
  router.push('/order')
}
</script>


<template>
  <div class="container">
    <h1>Login</h1>
    <button @click="loginClick()">登入</button>
  </div>
</template>


<style scoped></style>