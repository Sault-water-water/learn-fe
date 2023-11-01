<template>
  <h2>{{ title }}</h2>
  <item></item>
</template>



<script>
export default {
  components: {
  },
  data() {
    return {
      title: '标题'
    }
  }
}
</script>

<!-- scoped style只能在当前使用 -->
<style scoped></style>