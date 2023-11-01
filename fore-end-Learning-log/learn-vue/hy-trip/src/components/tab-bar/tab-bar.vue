<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentName" active-color="#ff9854" >
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path" :name="formatName(item.path)">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <template #icon>
            <img v-if="currentName !== formatName(item.path)" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>

import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"
import { computed, ref, watch } from "vue";

const currentName = ref('home')

const formatName = (path) => path.slice(1)


</script>

<style lang="less" scoped>
.tab-bar {
  // 改变组件库样式的三种方式:
  // 1.局部定义一个变量: 只针对.tab-bar子元素才生效
  // --van-tabbar-item-icon-size: 30px !important;

  // 2. :root中全局修改

  // 3.找到类, 对类中的CSS属性重写
  // :deep(.class)找到子组件的类, 让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }

  img {
    height: 26px;
  }
}
</style>
