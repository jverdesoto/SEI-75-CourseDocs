import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import Vue3Cookies from "vue3-cookies"
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/globalStyles.css'

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID})
app.use(Vue3Cookies, {
    expireTimes: "1d", // How long the cookie will remain in our system
    path: '/', // Where the cookie will be saved (root)
    domain: '',
    secure: true, // Encrypted by default
    sameSite: 'None'
})

app.mount('#app') // Targets the div with the id 'app' in index.html

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import vue3GoogleLogin from 'vue3-google-login'

// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(faAngleRight, faAngleLeft)

// createApp(App)
// .use(router)
// .use(vue3GoogleLogin, {clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID})
// .component('font-awesome-icon', FontAwesomeIcon)
// .mount('#app')