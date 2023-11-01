<script setup lang="ts">
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { onMounted, ref } from 'vue'
import useMainStore from '@/store/main/main'



// 折叠header
const isFold = ref(false)
function handleFoldChange() {
  isFold.value = !isFold.value
}

// 预备数据
onMounted(() => {
  useMainStore().fetchEntireDataAction()
})

</script>

<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside class="el-aside" :width="isFold ? '60px' : '210px'">
        <main-menu :isFold="isFold"></main-menu>
      </el-aside>
      <el-container>
        <el-header class="el-header">
          <main-header @fold-change="handleFoldChange"></main-header>
        </el-header>
        <el-main el-main="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
