import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importing the router configuration
import vue3GoogleLogin from 'vue3-google-login';
import { globalCookiesConfig } from "vue3-cookies";

// Configure global cookies
globalCookiesConfig({
    expireTimes: "1d", // 24 hours
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});

// Create and configure the Vue app
const app = createApp(App);
app.use(router);
app.use(vue3GoogleLogin, { clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID });
app.mount('#app');
