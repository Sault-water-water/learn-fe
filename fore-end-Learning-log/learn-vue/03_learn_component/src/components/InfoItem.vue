<template>
  <div class="info">
    infoItem---{{ name }}
    {{ friend }}
    <h1 @click="onH1click" :class="$attrs.class">h1</h1>
    <button @click="onBtnClick">eventBus</button>
  </div>
</template>

<script>
import eventBus from'./utils/event-bus'
export default {
  data() {
    return {

    }
  },
  // emits 相当于子传父的注册,写成对象语法可以增加验证
  emits:['onclick'],
  components: {

  },
  // props数组语法
  // props:["name"]
  // props对象语法
  props: {
    name: {
      type: String,
      default: 'default name'
    },
    friend: {
      type: Object,
      default: () => ({
        name: 'james'
      })
    },
    hobbies: () => ['aaa', 'bbb', 'ccc'],

  },
  // 阻止默认传递的props
  // inheritAttrs: false,

  methods: {
    onH1click() {
      console.log('click');
      this.$emit('onclick')
    },
    onBtnClick() {
      console.log('btnClick');
      eventBus.emit('btnClick','why')
    }
  }
}
</script>

<style scoped></style>