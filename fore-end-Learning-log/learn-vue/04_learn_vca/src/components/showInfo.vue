<template>
  <h1>
    info{{ info }}

  </h1>
  <button @click='info.name="kobe"'>infoChange</button>
  <button @click='infoChange'>infoChange</button>
</template>

<script>
export default {

  props: {
    info: {
      type: Object,
      default: () => { }
    }
  },
  components: {

  },

  setup(props, context) {
    function showInfoFoo() {
      console.log('组件的方法');
    }

    function infoChange() {
      context.emit('changeInfo', 'aaa')
    }

    return {
      infoChange,showInfoFoo
    }
  }
}
</script>

<style scoped></style>