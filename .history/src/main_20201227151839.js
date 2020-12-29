import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import "@/styles/element-variables.scss";
import '@/styles/index.sass';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app');
