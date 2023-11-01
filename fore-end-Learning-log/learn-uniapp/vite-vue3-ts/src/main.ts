import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/index.less'

import store from './store'
import router from './router/index'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
