<script setup>
import {
  useRouter
} from 'vue-router';
const router = useRouter()
function btnClick() {
  // router.back()
  // router.forward()

  router.go(-1)
}
</script>


<template>
  <div class="about">
    about {{ $route.query }}
    <button @click="btnClick">router</button>
  </div>
</template>


<style scoped></style>