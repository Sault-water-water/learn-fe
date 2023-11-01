<template>
  slot
  <slot>
    aaa
    <p>我是默认值</p>
  </slot>
</template>

<script>
export default {
  name:'UseSlot',
  props: {

  },
  components: {

  }
}
</script>

<style scoped></style>