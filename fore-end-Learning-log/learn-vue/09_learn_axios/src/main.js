import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'

createApp(App).mount('#app')


// 发送request请求
axios.request({
  url:'http://123.207.32.32:8000/home/multidata'  
}).then(res => {
  console.log(res);
})


// 发送get请求
// axios.get('http://123.207.32.32:9001', {
//   params: {
//     id:500665346
//   }
// }).then(res => { 
//   console.log(res.data.lrc)
// })


// axios配置

const baseURL='http://123.207.32.32:8000'
axios.defaults.baseURL = baseURL

axios.get('/home/multidata').then(res => {
  console.log('aa',res.data)
})

// axios.all


// 创建 axios 多个实例
const instance1 = axios.create({
  baseURL: '',
  timeout: 6000,
  headers: {}
})


// 配置拦截器
axios.interceptors.request.use((config) => {
  console.log('请求成功的拦截')

  return config
}, (err) => {
  console.log('请求失败的拦截')
})


axios.interceptors.response.use((res) => {
  console.log('响应成功的拦截')

  return res.data
}, (err) => {
  console.log('响应失败的拦截',err)
})