<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

const searchForm = reactive({
  name: '',
  leader: '',
  createAt: '',
})
const formRef = ref<InstanceType<typeof ElForm>>()

const emit = defineEmits(['resetClick', 'queryClick'])
function handleResetClick() {
  formRef.value?.resetFields()
  emit('resetClick')
}

function handleQueryClick() {
 
  emit('queryClick', searchForm)
}
</script>

<template>
  <div class="user-search">
    <el-form :model="searchForm" ref="formRef" label-width="100px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item prop="name" label="部门名称">
            <el-input v-model="searchForm.name" placeholder="请输入查询的部门名称" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="realname" label="部门领导">
            <el-input v-model="searchForm.leader" placeholder="请输入查询的部门领导" clearable />
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item v-model="searchForm.createAt" label="创建时间" prop="createAt">
            <el-date-picker
              type="daterange"
              range-separator="一"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- 2.重置和搜索的按钮 -->
    <div class="btns">
      <el-button icon="Refresh" size="large" @click="handleResetClick">重置</el-button>
      <el-button icon="Search" size="large" @click="handleQueryClick" type="primary"
        >查询</el-button
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
.user-search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }
  .btns {
    text-align: right;
    padding: 0 50px 10px 0;

    .el-button {
      height: 36px;
    }
  }
}
</style>
