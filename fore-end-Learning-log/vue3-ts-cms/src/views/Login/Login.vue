<script setup lang="ts">
import LoginPanel from './c-cpns/login-panel.vue'
</script>


<template>
  <div class="login">
   <LoginPanel></LoginPanel>
  </div>
</template>


<style lang="less" scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  widows: 100%;
  height: 100%;

  background: url(../../assets/img/login-bg.svg);
}
</style>
