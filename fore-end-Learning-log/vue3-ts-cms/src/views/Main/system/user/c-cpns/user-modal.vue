<script setup lang="ts">
import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
import useSystemStore from '@/store/main/system/system'

// 动态绑定表单数据
const dialogVisible = ref(false)
const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: '',
})

// 获取数据
const mainStore = useMainStore()
const { entireDepartments, entireRoles } = storeToRefs(mainStore)

// 初始化提交表单
const isNewRef = ref()
let currentId:any =null

const initModal = (isNew: boolean = true, itemData?:any) => {
  dialogVisible.value = true
  isNewRef.value = isNew

  if (!isNew) {
    // 编辑
    for (const key in formData) {
      formData[key] = itemData[key]
    }

    currentId = itemData.id
  } else {
    // 添加用户
    for (const key in formData) {
      formData[key] = ''
    }
  }
}

async function handleAddUser() {
  const res = await useSystemStore().addUserAction(formData)
  // 注意,这里即使创建失败服务器不会报错
  ElMessage({
    showClose: true,
    message: res.data,
  })
}

// 确定提交
 function handleConfirmClcik() {
  dialogVisible.value = false

  if (isNewRef.value) {
  handleAddUser()

  } else {
    handleEditUser()
  }

  // 清空表单数据
}

// 编辑用户

async function handleEditUser() {
  const res = await useSystemStore().updateUserAction(currentId as number, formData)
  ElMessage({
    showClose: true,
    message: res.data,
  })
}

defineExpose({ initModal })
</script>

<template>
  <div class="userModal">
    <el-dialog draggable v-model="dialogVisible" :title="isNewRef?'添加用户':'编辑用户'" width="30%" align-center>
      <el-form size="large" :model="formData">
        <el-form-item label="用户名" :label-width="80">
          <el-input placeholder="请输入用户名" v-model="formData.name" />
        </el-form-item>
        <el-form-item label="真实姓名" :label-width="80">
          <el-input placeholder="请输入真实姓名" v-model="formData.realname" />
        </el-form-item>
        <el-form-item v-show="isNewRef" label="密码" :label-width="80">
          <el-input show-password placeholder="请输入密码" v-model="formData.password" />
        </el-form-item>
        <el-form-item label="手机号码" :label-width="80">
          <el-input placeholder="请输入手机号码" v-model="formData.cellphone" />
        </el-form-item>

        <el-form-item label="选择角色" :label-width="80">
          <el-select style="width: 100%" placeholder="请选择角色" v-model="formData.roleId">
            <el-option
              v-for="item in entireRoles"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门" :label-width="80">
          <el-select style="width: 100%" placeholder="请选择部门" v-model="formData.departmentId">
            <el-option
              v-for="item in entireDepartments"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span>
          <el-button size="large" @click="dialogVisible = false">取消</el-button>
          <el-button size="large" type="primary" @click="handleConfirmClcik">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.userModal {
  .el-form {
    padding: 0 20px;
  }
}
</style>
