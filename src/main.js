import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'
import './permission'
import 'tailwindcss/tailwind.css'

import BasicsTable from '@/components/FormBase/BasicsTable'

createApp(App)
  .component('basics-table', BasicsTable)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: localStorage.getItem('size') || 'small' })
  .mount('#app')
