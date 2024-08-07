import { createApp } from "vue";
import App from './app.vue'
import Router from '@src/router'
import './style/index.css'


const app = createApp(App)
app
    .use(Router)
    .mount('#app')