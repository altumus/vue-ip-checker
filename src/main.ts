import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).use(ElementPlus).mount('#app');
