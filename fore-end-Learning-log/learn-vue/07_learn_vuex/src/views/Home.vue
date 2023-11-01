<script setup>

</script>


<script>
import { mapState } from "vuex"

export default {
  computed: {
    // mapState 返回的是函数 
    //还有对象形式的mapState

    ...mapState(['name', 'age'])
  }
}
</script> 


<template>
  <div class="home">
    <h1>home</h1>
    name:{{ name}} age:{{ age }}
  </div>
</template>


<style scoped></style>