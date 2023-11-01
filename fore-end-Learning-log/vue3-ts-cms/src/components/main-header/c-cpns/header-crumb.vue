<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { mapPathToBreadcrumbs } from '@/utils/mapPathToMenu'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const userMenu = useLoginStore().userMenus
const breadcrumbs = computed(() => mapPathToBreadcrumbs(route.path, userMenu))
</script>

<template>
  <div class="header-crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item of breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
.header-crumb {
  color: skyblue;
}
</style>
