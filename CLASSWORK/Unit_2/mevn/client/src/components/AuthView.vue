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
            try {
                this.isLoggedIn = true
                const userData = decodeCredential(response.credential)
                console.log(userData);
                this.userName = userData.given_name
                this.$cookies.set('user_session', response.credential)
            } catch (error) {
                console.error(error);
            }
        },
        handleLogOut: function () {
            googleLogout()
            this.isLoggedIn = false
            this.$cookies.remove('user_session')
        },
        
    }
}
</script>
  