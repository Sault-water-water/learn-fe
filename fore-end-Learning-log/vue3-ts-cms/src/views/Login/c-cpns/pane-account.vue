<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { useRouter } from 'vue-router'
import { localCache } from '@/utils/cache'

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'

const account = reactive<IAccount>({
  name: localCache.getCache(CACHE_NAME) ?? '',
  password: localCache.getCache(CACHE_PASSWORD) ?? '',
})

// 定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '请输入帐号信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '请输入6~20数字或字母组成的帐号~',
      trigger: 'change',
    },
  ],
  password: [
    { required: true, message: '请输入密码信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '请输入6位以上数字或字母组成的密码~',
      trigger: 'change',
    },
  ],
}

// 执行登录逻辑
const formRef = ref<FormInstance>()
const loginStore = useLoginStore()

function loginAction(isRemPwd: boolean) {
  formRef.value?.validate((valid) => {
    if (valid) {
      const name = account.name
      const password = account.password

      // 虽然account响应式也可以,但传入普通的对象
      loginStore
        .loginAccountAction({ name, password })
        .then(() => {
          if (isRemPwd) {
            localCache.setCache(CACHE_NAME, name)
            localCache.setCache(CACHE_PASSWORD, password)
          } else {
            localCache.removeCache(CACHE_NAME)
            localCache.removeCache(CACHE_PASSWORD)
          }
        })
        .catch((err) => {
          ElMessage.error(`请您输入正确的帐号和密码`)
          console.log(err)
        })
    } else {
      ElMessage.error('Oops, 请您输入正确的格式后再操作~~.')
    }
  })
}

defineExpose({
  loginAction,
})
</script>

<template>
  <div class="pane-account">
    <el-form ref="formRef" label-width="80" :rules="accountRules" :model="account">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.pane-account {
  color: skyblue;
}
</style>
