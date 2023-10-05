import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

createApp(App)
.use(router)
.use(vue3GoogleLogin,{clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID})
.mount('#app')

