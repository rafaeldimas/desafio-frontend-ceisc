import './assets/main.css'

import { createApp } from 'vue'
import CeiscApp from './CeiscApp.vue'
import router from './router'

const app = createApp(CeiscApp)

app.use(router)

app.mount('#app')
