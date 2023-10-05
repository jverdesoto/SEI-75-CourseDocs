import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import { globalCookiesConfig } from "vue3-cookies"

globalCookiesConfig({
    expireTimes: "1d", // 24 hours
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
  })

createApp(App).use(router).use(vue3GoogleLogin, {clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID}).mount('#app')

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