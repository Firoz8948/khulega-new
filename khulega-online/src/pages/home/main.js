import { createApp } from 'vue'
import App from './App.vue'
import { registerGlobalComponents } from '@/components/global/register.js'
import '@css/global.css'
import '@css/components.css'
import '@css/pages/home.css'
import '@css/pages/seller-journey.css'

const app = createApp(App)
registerGlobalComponents(app)
app.mount('#app')
