<script setup lang="ts">
import { ref, watch } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'
import { localCache } from '@/utils/cache'

const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false)
watch(isRemPwd, (value) => {
  localCache.setCache('isRemPwd', value)
})

const tabName = ref('account')
// 调用子组件的方法
const accountRef = ref<InstanceType<typeof PaneAccount>>()

const onLoginBtnClick = () => {
  console.log(`进行${tabName.value}登录`)
  if (tabName.value === 'account') {
    accountRef.value?.loginAction(isRemPwd.value)
  }
}
</script>

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>

    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="tabName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>

          <PaneAccount ref="accountRef"></PaneAccount>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>

          <PanePhone></PanePhone>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="controls">
      <el-checkbox label="记住密码" v-model="isRemPwd" size="large"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button @click="onLoginBtnClick" class="login-btn" type="primary" size="large"
      >立即登录</el-button
    >
  </div>
</template>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    // --el-button-size: 50px;
  }
}
</style>
