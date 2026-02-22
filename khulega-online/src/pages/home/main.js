import { createApp } from 'vue'
import App from './App.vue'
import { registerGlobalComponents } from '@/components/global/register.js'
import '@css/global.css'
import '@css/components.css'
import '@css/pages/home.css'
import '@css/pages/seller-journey.css'
import '@css/pages/sellers-on-khulega.css'
import '@css/pages/aboutus-a.css'
import '@css/pages/aboutus-brands.css'
import '@css/pages/cta-section.css'
import '@css/pages/youtubevideo.css'

const app = createApp(App)
registerGlobalComponents(app)
app.mount('#app')
