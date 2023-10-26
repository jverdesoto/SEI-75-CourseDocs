import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

import Vue3Cookies from 'vue3-cookies'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/globalStyles.css'


const app = createApp(App)
app.use(router)
app.use(vue3GoogleLogin, {clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID})
app.use(Vue3Cookies, {
    expireTimes: "1d", // 24 hours
    path: "/", //we want them to work everywhere in the site
    domain: "",  //we want them to work globally
    secure: true, //cookie encrypted by default
    sameSite: "None",
})


app.mount('#app')