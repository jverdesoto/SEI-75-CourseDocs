<template>
    <div>
        <h1>Login page</h1>
        <div v-if="isLoggedIn">
            <h2>Hello {{ userName }}</h2>
            <button @click="handleLogOut">Log Out</button>
        </div>
        <div v-else>
            <GoogleLogin :callback="callback" />
        </div>
    </div>
</template>
  
<script>
import { decodeCredential, googleLogout } from 'vue3-google-login'

export default {
    name: "LoginForm",
    data: () => ({
        isInit: false,
        isLoggedIn: false,
        userName: ''
    }),
    methods: {
        callback: function (response) {
            try {
                this.isLoggedIn = true
                const userData = decodeCredential(response.credential)
                console.log(userData);
                this.userName = userData.given_name
            } catch (error) {
                console.error(error); 
            }
        },
        handleLogOut: function () {
            googleLogout()
            this.isLoggedIn = false
        }
    }
}
</script>
  