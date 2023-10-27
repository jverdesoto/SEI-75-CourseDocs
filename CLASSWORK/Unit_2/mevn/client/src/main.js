import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import  Vue3Cookies  from "vue3-cookies";


const app = createApp(App)

app.use(router)
console.log(process.env);
app.use(vue3GoogleLogin, {clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID})
app.use(Vue3Cookies, {
    expireTimes: "1d",
    path: '/',
    domain: '',
    secure: true,
    sameSite: 'None'
})

.mount('#app')