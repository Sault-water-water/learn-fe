<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

import { formatUTC } from '@/utils/format'
import { ref } from 'vue'

// 获取store数据
const systemStore = useSystemStore()

const { usersList, usersTotalCount } = storeToRefs(systemStore)

const currentPage = ref(1)
const pageSize = ref(10)

// 进入页面发送请求
fetchUserListData()


// 分页器交互
function handleSizeChange() {
  fetchUserListData()
}

function handleCurrentChange() {
  fetchUserListData()
}



// fetchUserList
function fetchUserListData(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const info = { size, offset, ...formData }

  systemStore.postUsersListAction(info)
}



const emit = defineEmits(['addUser','editUser'])

// 删除操作
function onDeleteClick(id: number) {
  console.log(id)
  systemStore.deleteUserByIdAction(id)
}

// 编辑操作
function onEidtClick(itemData: any) {

  emit('editUser',itemData)
}

// 创建用户

function onAddUserClick() {

  emit('addUser')
}

defineExpose({ fetchUserListData })
</script>

<template>
  <div class="user-content">
    <div class="header">
      <span class="text">用户列表</span>

      <el-button type="primary" @click="onAddUserClick" size="large">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="55" />
        <el-table-column align="center" label="序号" type="index" width="55" />
        <el-table-column align="center" prop="name" label="用户名" />
        <el-table-column align="center" prop="realname" label="真实姓名" />
        <el-table-column align="center" prop="cellphone" label="手机号码" width="200" />
        <el-table-column align="center" prop="enable" width="90" label="状态">
          <template #default="scope">
            <el-button
              class="enable"
              disabled
              size="small"
              :type="scope.row.enable ? 'primary' : 'danger'"
            >
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="createAt" label="创建时间" width="300">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="更新时间" width="300">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>

        <el-table-column align="center" fixed="right" label="操作" width="150">
          <template #default="scope">
            <el-button link type="danger" size="large" icon="Delete" @click="onDeleteClick(scope.row.id)">
              删除
            </el-button>
            <el-button @click="onEidtClick(scope.row)" link type="primary" size="large" icon="Edit"> 编辑 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="usersTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.user-content {
  margin-top: 20px;

  border-radius: 8px;
  padding: 20px;

  background-color: #fff;

  .header {
    margin-bottom: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
      font-size: 22px;
      font-weight: 700;
    }
  }

  .table {
    .enable {
      cursor: default;
    }
  }

  .pagination {
    margin-top: 12px;

    display: flex;
    justify-content: flex-end;
  }
}
</style>
