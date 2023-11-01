<script setup lang="ts">
import PageSearch from './c-cpns/page-search.vue'
import PageContent from './c-cpns/page-content.vue'
import { ref } from 'vue'
import PageModal from './c-cpns/page-modal.vue'

// 搜索表单

const contentRef = ref<InstanceType<typeof PageContent>>()

function handleQueryClick(formData: any) {
  contentRef.value?.fetchPageListData(formData)
}

function handleResetClick() {
  contentRef.value?.fetchPageListData()
}

// 添加用户弹窗

const modelRef=ref<InstanceType<typeof PageModal>>()
function handleAddClick() {
modelRef.value?.initModal()
}

// 编辑用户
function handleEditClick(itemData:any) {
  modelRef.value?.initModal(false,itemData)

}
</script>

<template>
  <div class="user">
    <PageSearch @query-click="handleQueryClick" @reset-click="handleResetClick"></PageSearch>
    <PageContent @edit-data="handleEditClick" @add-data="handleAddClick" ref="contentRef"></PageContent>
    <PageModal ref="modelRef"></PageModal>
  </div>
</template>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
