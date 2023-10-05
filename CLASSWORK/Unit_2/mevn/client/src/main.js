import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import { globalCookiesConfig } from "vue3-cookies";

globalCookiesConfig({
    expireTimes: "1d", // 24 hours
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
  });

createApp(App).use(router).use(vue3GoogleLogin, {clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID}).mount('#app')