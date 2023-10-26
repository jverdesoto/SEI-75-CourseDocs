<template>
    <div class="login-page-container">
        <h1>Login page</h1>
        <div v-if="isLoggedIn">
            <GoogleLogin :callback="callback" />
            <h2> Hello {{ userName }}</h2>
            <button @click="handleLogout" class='btn btn-primary'>Log Out</button>
        </div>
        <div v-else>
            <GoogleLogin :callback="callback" />
            <myButton buttonText="hello"/>
            <myButton buttonText="hey"/>
        </div>
    </div>
   
</template>

<script>
import { decodeCredential, googleLogout } from 'vue3-google-login'
import myButton from '../buildingBlocks/button'

const DATA_URL = 'http://localhost:4000/library/user/login'

export default {
    name: "LoginPage",
    data: () => ({
        isLoggedIn: false,
        userName: '',
        email: ''
    }),
    mounted(){
        if(this.$cookies.isKey('user_session')){
            this.isLoggedIn = true
            const userData = decodeCredential(this.$cookies.get('user_session'))
            this.userName = userData.given_name
        }
    },
    methods: {
        callback: async function (response) {
            this.isLoggedIn = true
            const userData = decodeCredential(response.credential)
            this.userName = userData.given_name
            this.email = userData.email
            console.log(userData)
            this.$cookies.set('user_session', response.credential)
            //send user email from the data to the backend
            await fetch(DATA_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.email
                })
            })
            console.log('session saved')
            
        },
        handleLogout: function () {
            googleLogout()
            this.$cookies.remove('user_session')
            this.isLoggedIn = false
        }
    }, 
    components: {
        myButton
    }
}
</script>

<style scoped>
.login-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>