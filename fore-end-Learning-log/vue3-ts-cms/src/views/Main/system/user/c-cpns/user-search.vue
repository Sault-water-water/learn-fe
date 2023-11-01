<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

const searchForm = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt:'',
})
const formRef = ref<InstanceType<typeof ElForm>>()

const emit=defineEmits(['resetClick','queryClick'])
function handleResetClick() {
  formRef.value?.resetFields()
  emit('resetClick')
}

function handleQueryClick() {
  emit('queryClick',searchForm)
}
</script>

<template>
  <div class="user-search">
    <el-form :model="searchForm" ref="formRef" label-width="100px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item prop="name" label="用户名">
            <el-input v-model="searchForm.name" placeholder="请输入查询的用户名" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="realname" label="真实姓名">
            <el-input v-model="searchForm.realname" placeholder="请输入查询的真实姓名" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="cellphone" label="手机号码">
            <el-input v-model="searchForm.cellphone" placeholder="请输入查询的手机号码" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item v-model="searchForm.enable" prop="enable" label="状态">
            <el-select style="width: 100%"
            v-model="searchForm.enable"

            placeholder="请选择查询的状态">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
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
      <el-button icon="Search" size="large" @click="handleQueryClick" type="primary">查询</el-button>
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
