<script setup>
import home from './views/Home.vue'
import { mapActions, mapMutations, mapState, useStore } from 'vuex';

import { computed, toRef, toRefs } from 'vue';
const store = useStore()

// const counter=toRef(store.state.counter)
const counter = toRef(store.state, 'counter')
function increment() {
  store.commit('increment');
}


// setup使用mapState
// const {name}=mapState(['name'])
// const cName=computed(name.bind({$store:store}))


const { name, age } = toRefs(store.state)

// const { message } = toRefs(store.getters)
// const message=computed(()=>store.getters.message)
const message = toRef(store.getters, 'message')



function changeMessage() {
  store.commit('changeMessage')
}

function incrementAction() {
  store.dispatch('incrementAction')
}

function dispatch() {
  store.dispatch('fetchInfo')
}
  

</script>



<template>
  <div class="app">
    counter:{{ $store.state.counter }} ; {{ counter }}
    doubleCounter {{ $store.getters.doubleCounter }}

    <button @click="increment">修改counter</button>
    totalPrice:{{ $store.getters.totalPrice }}
    <h2>book1{{ $store.getters.getbook1 }}</h2>
    <h2>bookid{{ $store.getters.getbookbyid(2) }}</h2>
    <h2>message {{ message }}</h2>
    <home></home>

    <!-- <h2>setup中使用mapState:{{ cName }}</h2> -->
    <h2>setup中使用mapState:{{ name }}</h2>

    <hr>
    <button @click="incrementAction">Action</button>
    <button @click="changeMessage">changeMessage</button>
    <!-- <button @click="Mincrement">mutation</button> -->

    <hr>
    <button @click="dispatch">dispatch</button>


    <hr>
    Modules:{{ $store.state.home.homeInfo }}
    <!-- Modules的getters,actions,mutation默认合并到根 -->
  </div>
</template> 


<style scoped></style>