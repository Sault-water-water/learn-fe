
<script>

import { reactive, computed, ref, onMounted, watch, watchEffect } from 'vue';
import useCounter from './hooks/useCounter'
import info from './components/showInfo.vue'
import happy from "./components/happy.vue"
import useTitle from './hooks/useTitle';
import useScrollPosition from './hooks/useScrollPosition';
export default {
  components: {
    happy, info
  },
  setup() {
    const happyRef = ref()

    onMounted(() => {
      console.log('happy', happyRef)
      console.log("titleRef", titleRef)
      // showInfoRef.value.showInfoFoo
    })


    const titleRef = ref()


    const account = reactive({
      name: 'why'
    })
    const info = reactive({
      name: 'why',
      height: 1.88
    })


    function changeInfo(payload) {
      info.name = payload
    }

    const stopwatch = watchEffect(() => {
      console.log('first', account.name)
    })


    const name = reactive({
      firstName: 'why',
      lastName: 'Lname'

    })

    const fullName = computed({
      set: function (newVelue) {
        const tempNames = newVelue.split(' ')
        name.firstName = tempNames[0]
        name.lastName = tempNames[1]

      },
   
      get() {
        return name.firstName + ' ' + name.lastName
      }
    })

    function changeFullName() {
      fullName.value = 'zhj zhj'
    }

    //watch第一个位置可以使用回调函数,会自动收集依赖的数据
    watch(info, (newVelue, oldValue) => {
      console.log(newVelue, oldValue)
    })

    const title = useTitle('hhh')

    function changeTitle() {
      title.value='hook'
    }

    const { scrollPosition} = useScrollPosition()

    return {
      ...useCounter(),
      account,
      info,
      changeInfo,
      fullName,
      changeFullName,
      titleRef,
      happyRef,
      useTitle,
      changeTitle,
      scrollPosition
    }
  }               
}

// setup语法糖defineeEit,defineProps,defineExports
</script>


<template>
  <div class="box">
    <!-- 这里template会自动解包 -->
    <h2>app:{{ counter }}</h2>
    <button @click="increment">btn</button>
  </div>


  <!-- ref和reactive -->
  <div>
    <form action="">
      账号:<input type="text" v-model="account.name">
      密码:
    </form>
  </div>


  <!-- 代码规范:单向数据流(不在子组件中修改父组件传递的数据),用readonly包裹可以强制不允许修改 -->
  <h1>info组件</h1>
  <info ref="showInfoRef" @changeInfo="changeInfo" :info="info"></info>


  <!-- Reactive相关api:isProxy(是否代理对象reactive或readonly),isReadonly,isReactive,toRaw(拿到原对象),shallowReactive... -->

  <!-- ref相关的api:toRef(使对象解构出来值仍为响应式),toRefs,toRef,unref(val)==val=isRef(val)?val.value:val -->






  <hr>
  <h2>fullName:{{ fullName }}</h2>
  <button @click="changeFullName">设置fullname</button>



  <hr>
  <h2 ref="titleRef">ref获取元素的使用</h2>




  <hr>
  <happy ref="happyRef"></happy>


  <hr>
  <button @click="changeTitle('hook')">hook使用:切换标题</button>
  <hr>
<h1>{{scrollPosition.x}}</h1>
<h1>{{scrollPosition.y}}</h1>


  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


</template>


<style scoped></style>


