import { createApp } from 'vue'
import './styles/index.scss'
import router from './routers'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
