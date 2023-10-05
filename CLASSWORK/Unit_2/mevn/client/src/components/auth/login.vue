<template>
    <h1>Login page</h1>
    <div v-if="isLoggedIn">
        <h2>Hello {{ userName }}</h2>
        <button @click="handleLogOut">Log Out</button>
    </div>
    <div v-else>
        <GoogleLogin :callback="callback" />
    </div>
</template>

<script>
import { decodeCredential } from 'vue3-google-login'

export default {
    name: "LoginForm",
    data: () => ({
        isInit: false,
        isLoggedIn: false,
        userName: '',
        emailAddress: ''
    }),
    methods: {
        callback: function (response) {
            this.isLoggedIn = true
            const userData = decodeCredential(response.credential)
            console.log(userData)
            this.userName = userData.given_name
            this.emailAddress = userData.emailAddress
            fetch('http://localhost:4000/email-addresses', {   // frontend sending it to the backend 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        emailAddress: this.data.emailAddress
                    })
                })
        },
        handleLogOut: function () {
            googleLogout()
            this.isLoggedIn = false
        }
    }
}
</script>