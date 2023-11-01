<template>
  <h2>我是组件v-model {{ modelValue }} </h2>
  <button @click="changeModelValue">修改modelValue</button>
</template>

<script>

export default {
  name: 'ModeL',
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  methods: {
    changeModelValue() {
      console.log('+++++')
      this.$emit("update:modelValue", 999)
    }
  }
}
</script>

<style scoped></style>