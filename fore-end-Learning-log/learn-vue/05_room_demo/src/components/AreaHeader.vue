<script setup>
defineProps({

  title: {
    type: String,
    default: '默认标题'
  },
  subtitle: {
    type: String,
    default: 'zbt'
  }

})
</script>


<template>
  <div class="area-header">
    <div class="title"> {{ title }} </div>
    <div class="subtitle"> {{ subtitle }} </div>
  </div>
</template>


<style lang="less" scoped>
  .area-header {
    .title{
      font-size: 33px;
    }
  }
</style>