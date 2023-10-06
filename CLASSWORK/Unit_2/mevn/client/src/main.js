import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import vue3GoogleLogin from 'vue3-google-login'
import Vue3Cookies from "vue3-cookies"
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/globalStyles.css'

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID})
app.use(Vue3Cookies, {
    expireTimes: "1d", // cookie time in system
    path: '/', // root - where cookie is saved
    domain: '',
    secure: true, // Encrypted by default
    sameSite: 'None'
})

app.mount('#app') 
