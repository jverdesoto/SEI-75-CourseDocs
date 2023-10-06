import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importing the router configuration
import vue3GoogleLogin from 'vue3-google-login';
import Vue3Cookies from "vue3-cookies";

const app = createApp(App);

app.use(router);

app.use(vue3GoogleLogin, { clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID });


app.use(Vue3Cookies, {
    expireTimes: "1d", // 24 hours
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});



app.mount('#app');
