import { createApp } from 'vue'
import App from './App.vue'
import { registerGlobalComponents } from '@/components/global/register.js'
import '@css/global.css'
import '@css/components.css'
import '@css/components/hero-section.css'
import '@css/pages/apply-job.css'

const app = createApp(App)
registerGlobalComponents(app)
app.mount('#app')
