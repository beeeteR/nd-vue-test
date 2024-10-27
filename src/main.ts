import './assets/style/main.scss'

import App from './App.vue'
import router from "@/router";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createMiddleware} from "vue3-middleware";
import { metaTagPlugin } from "@m-media/vue3-meta-tags";

const app = createApp(App)
const middleware = createMiddleware()

app.use(router)
app.use(middleware)
app.use(createPinia())
app.use(metaTagPlugin, {}, router)

app.mount('#app')
