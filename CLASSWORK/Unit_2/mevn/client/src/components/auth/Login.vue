<template>
    <h1>Login page</h1>
    <div v-if="isLoggedIn">
        <h2>Hello {{ userName }}</h2>
        <button class="btn btn-primary" @click="handleLogOut">Log Out</button>
    </div>
    <div v-else>
        <GoogleLogin :callback="callback" />
    </div>
</template>

<script>
import { decodeCredential, googleLogout } from 'vue3-google-login'

export default {
    name: "LoginForm",
    data: () => ({
        isLoggedIn: false,
        userName: ''
    }),
    mounted() {
        if (this.$cookies.isKey('user_session')) {
            this.isLoggedIn = true
            const userData = decodeCredential(this.$cookies.get('user_session'))
            this.userName = userData.given_name
        }
    },
    methods: {
        callback: function (response) {
            this.isLoggedIn = true
            const userData = decodeCredential(response.credential)
            console.log(userData);
            this.userName = userData.given_name
            this.$cookies.set('user_session', response.credential);
        },
        handleLogOut: function () {
            googleLogout()
            this.$cookies.remove('user_session')
            this.isLoggedIn = false
        }
    }
}
</script>