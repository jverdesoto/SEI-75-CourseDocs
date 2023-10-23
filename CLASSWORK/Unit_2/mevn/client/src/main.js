import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import Vue3Cookies from "vue3-cookies"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/globalStyles.css'

const app = createApp(App)
app.use(router)
app.use(vue3GoogleLogin, {clientId: PromiseRejectionEvent.env.VUE_APP_GOOGLE_CLIENT_ID})
app.use(Vue3Cookies, {
    expireTimes: "id",
    path: '/',
    domain: '',
    secure: true,
    sameSite: 'None'
})

app.use(BootstrapVue)

app.mount('#app')

 








// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import DogsView from './components/DogsView.vue'

// Vue.use(VueRouter)

// const routes = [
//   { path: '/dogs/:id', component: DogsView }
// ]

// const router = new VueRouter({
//   routes
// })

// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')


// createApp(App).mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import DogsView from './components/DogsView.vue'

// const routes = [
//   { path: '/dogs/:id', component: DogsView }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// createApp(App)
//   .use(router)
//   .mount('#app')

