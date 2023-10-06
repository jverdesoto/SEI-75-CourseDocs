import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
// import { globalCookiesConfig } from "vue3-cookies";
import Vue3Cookies from "vue3-cookies"
// import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


// globalCookiesConfig({
//     expireTimes: "1d", // 24 hours
//     path: "/",
//     domain: "",
//     secure: true,
//     sameSite: "None",
//   });

  const app = createApp(App)
  app.use(router)
  app.use(vue3GoogleLogin, {clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID})
  app.use(Vue3Cookies, {
    expireTimes: '1d',
    path: '/',
    domain: '',
    secure: true,
    sameSite: 'None'
  })
  // app.use(BootstrapVue)
  app.mount('#app')