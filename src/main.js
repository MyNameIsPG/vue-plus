import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import '@/styles/index.scss'
import './permission'
import 'tailwindcss/tailwind.css'

import BasicLayout from '@/components/FormBase/BasicLayout'

createApp(App)
  .component('basics-layout', BasicLayout)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: localStorage.getItem('size') || 'small' })
  .mount('#app')
