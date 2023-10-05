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
import { decodeCredential, googleLogout } from 'vue3-google-login'
  
export default {
    name: "LoginForm",
    data: () => ({
        isInit: false,
        isLoggedIn: false,
        userObject:{}
       
    }),
    methods: {
        callback: function (response) {
            this.isLoggedIn = true
            let userData = decodeCredential(response.credential)
            // TODO delete this line
            // userData = {email: "heba.arafat159@gmail.com", given_name:"Heba"}
            console.log(userData);
            this.userObject = userData;
            console.log(`Google User: ${JSON.stringify(this.userObject)}`);
            fetch(`http://localhost:4000/login`,{
                  method: "POST",
                  headers:{
                      "Content-Type" : "application/json"
                  },
                  body: JSON.stringify(this.userObject)
              })
              .then(res => 
              {
                  console.log(res.status)
                  if(res.status === 200){
                    console.log('Saved Successfully');
                    // this.$router.push({name: 'All Books'});
                  }
              }).catch (error => {
                console.log(error);
              })
        },
        handleLogOut: function () {
            googleLogout()
            this.isLoggedIn = false
        }
    }
}
</script>