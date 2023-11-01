<template>
  <div class="nav">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot>center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  components: {

  }
}
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;

  height: 44px;

  background-color: orange;
}
.left, .right {

  width: 80px;

  text-align: center;
}

.center {
  flex: 1;


  text-align: center;
}
</style>