<template>
  <div>
    app
    加冒号的写法等于JavaScript,attributes会传递到根组件
  </div>
  <hr>



  <InfoItem @onclick="itemclick" name="aaa" :age="18" class="attr"></InfoItem>
  <hr>



  <!-- 作用域插槽  -->
  <TabContral :titles="['衣服', '鞋子', '裤子']" @onTabItemTap="onTabItemTap">
    <template v-slot:default="attrs">
      <button>{{ attrs.item }}</button>
    </template>
  </TabContral>
  <hr>


  <UseSlot>
    <button>插入内容</button>
  </UseSlot>
  <hr>


  <!-- 具名插槽 -->
  <ManySlot ref="slot">
    <template v-slot:right>
      <button>slot-right</button>
    </template>
  </ManySlot>



  <!-- 动态插槽... -->


  <!-- 生命周期 -->


  <!-- ref获取元素 -->
  <button @click="ref">获取元素</button>
  <hr>


  <!-- 动态组件,keep-alive(include,exclude,max)(组件自身要有name)(keep-alive专属生命周期:activated,deactivated) -->
  <UseSlot></UseSlot>
  <keep-alive include="UseSlot,ManySlot">
    <component :is="'UseSlot'"></component>
  </keep-alive>





  <!-- 异步组件 -->
  <Category></Category>


  <!-- 组件的v-model相当于传递prop,再监听update -->
  <!-- <model v-model="value"></model>

  <model :modelValue="value" @update:modelValue="value = $event"></model> -->
  <model v-model="value"></model>
  <model :modelValue="value" @update:modelValue="value=$event"></model>

  <!-- v-model自定义名称  v-model:counter-->
  
</template>

<script>
import model from './components/model.vue'
import TabContral from './components/TabContral.vue'
import InfoItem from "./components/InfoItem.vue"
import UseSlot from './components/UseSlot.vue'
import ManySlot from './components/ManySlot.vue'
import { computed, defineAsyncComponent } from 'vue'
import eventBus from './components/utils/event-bus'
const AsyncCategory = defineAsyncComponent(() =>
  import('./components/Category.vue')
)
export default {
  data() {
    return {
      name: 'why',
      value: 1111
    }
  },
  created() {
    eventBus.on('btnClick', this.eventHandler)
  },
  unmounted() {
    eventBus.off('btnClick', this.eventHandler)
  },
  provide() {
    return {
      name: computed(() => {
        return this.name
      })
    }
  },
  components: {
    InfoItem, TabContral, UseSlot, ManySlot, Category: AsyncCategory, model
  },
  methods: {
    lll() {
      console.log('lll')
    },
    ref() {
      console.log(this.$refs.slot)

      //组件内单根获取到第一个元素,多根获取到的是第一个node节点(尽量写单根组件),还可以获取父组件,..
      console.log(this.$refs.slot.$el)
    },
    eventHandler() {
      (argu) => {
        console.log('app监听到', argu)
      }
    },
    itemclick() {
      console.log('子传父');
    },
    onTabItemTap(index) {
      console.log('fu', index)
    }
  }
}
</script>

<style scoped></style>