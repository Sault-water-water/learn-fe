import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import router from './router'
import store from './store'
import icons from './global/register-icons'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'



createApp(App)
  .use(router)
  .use(store)
  .use(icons)
  .mount('#app')

