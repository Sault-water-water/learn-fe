<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

import { formatUTC } from '@/utils/format'
import { ref } from 'vue'

// 获取store数据
const systemStore = useSystemStore()

const { pageList, pageTotalCount } = storeToRefs(systemStore)

const currentPage = ref(1)
const pageSize = ref(10)

// 进入页面发送请求
fetchPageListData()

// 分页器交互
function handleSizeChange() {
  fetchPageListData()
}

function handleCurrentChange() {
  fetchPageListData()
}

// 查
function fetchPageListData(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const info = { size, offset, ...formData }

  systemStore.postPageListAction('department', info)
}

const emit = defineEmits(['addData', 'editData'])

// 删除操作
function onDeleteClick(id: number) {
  console.log(id)

  systemStore.deletePageDataAction('department', id)
}

// 编辑操作
function onEidtClick(itemData: any) {
  emit('editData', itemData)
}

// 增

function onAddPageDataClick() {
  emit('addData')
}

defineExpose({ fetchPageListData })
</script>

<template>
  <div class="user-content">
    <div class="header">
      <span class="text">部门列表</span>

      <el-button type="primary" @click="onAddPageDataClick" size="large">新建部门</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="55" />
        <el-table-column align="center" label="序号" type="index" width="55" />
        <el-table-column align="center" prop="name" label="部门名称" />
        <el-table-column align="center" prop="leader" label="部门领导" />
        <el-table-column align="center" prop="parentId" label="上级部门" />

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
            <el-button
              link
              type="danger"
              size="large"
              icon="Delete"
              @click="onDeleteClick(scope.row.id)"
            >
              删除
            </el-button>
            <el-button @click="onEidtClick(scope.row)" link type="primary" size="large" icon="Edit">
              编辑
            </el-button>
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
        :total="pageTotalCount"
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
