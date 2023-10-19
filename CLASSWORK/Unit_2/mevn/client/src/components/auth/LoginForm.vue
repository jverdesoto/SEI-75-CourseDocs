<template>
    <h1>Login page</h1>
    <div v-if="isLoggedIn">
        <h2>Hello {{ userName }}</h2>
        <button @click="handleLogOut">Log Out</button>
    </div>
    <div v-else>
        <GoogleLogin :client-id="googleClientId" :callback="callback" />

    </div>
</template>

<script>
import { decodeCredential, googleLogout } from 'vue3-google-login';

export default {
    name: "LoginForm",
    data: () => ({
        googleClientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
        isInit: false,
        isLoggedIn: false,
        userName: '',
    }),
    mounted() {
        if (this.$cookies.isKey('user_session')) {
            this.isLoggedIn = true;
            const userData = decodeCredential(this.$cookies.get('user_session'));
            this.userName = userData.given_name;
        }
    },

    methods: {
        callback: function (response) {
            this.isLoggedIn = true
            const userData = decodeCredential(response.credential)
            console.log(userData);
            this.userName = userData.given_name
            this.$cookies.set('user_session', response.credential)

            fetch('http://localhost:4000/library/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: userData.email
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('session saved');
                    if (data.redirect) {
                        window.location.href = data.redirect;
                    }
                })
                .catch(error => console.error('Error:', error));

        },
        handleLogOut: function () {
            googleLogout()
            this.$cookies.remove('user_session')
            this.isLoggedIn = false
        }
    }
}
</script>