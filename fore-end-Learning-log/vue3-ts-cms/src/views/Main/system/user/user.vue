<script setup lang="ts">
import UserSearch from './c-cpns/user-search.vue'
import UserContent from './c-cpns/user-content.vue'
import { ref } from 'vue'
import UserModal from './c-cpns/user-modal.vue'


// 搜索表单
const contentRef = ref<InstanceType<typeof UserContent>>()

function handleQueryClick(formData: any) {
  contentRef.value?.fetchUserListData(formData)
}

function handleResetClick() {
  contentRef.value?.fetchUserListData()
}

// 添加用户弹窗

const modelRef=ref<InstanceType<typeof UserModal>>()
function handleAddUser() {
modelRef.value?.initModal()
}

// 编辑用户
function handleEditUserClick(itemData:any) {
  modelRef.value?.initModal(false,itemData)

}

</script>

<template>
  <div class="user">
    <UserSearch @query-click="handleQueryClick" @reset-click="handleResetClick"></UserSearch>
    <UserContent @edit-user="handleEditUserClick" @add-user="handleAddUser" ref="contentRef"></UserContent>
    <UserModal ref="modelRef"></UserModal>
  </div>
</template>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
