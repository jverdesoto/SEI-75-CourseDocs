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
// Import the 'decodeCredential' function from the 'vue3-google-login' package.
//The code imports the decodeCredential function from the 'vue3-google-login' package. 
//This function will be used to decode the user's credentials from the Google login response.
import { decodeCredential, googleLogout  } from 'vue3-google-login'

// Log the Google client ID from the environment variables.
console.log(process.env.VUE_APP_GOOGLE_CLIENT_ID)

// Export the Vue component.
// The Vue component is defined and exported. It's named "LoginForm."
//Inside the component definition, the name property is set to "LoginForm,"
// which is the name of the Vue component.
export default {
    // Define the name of the Vue component.
    name: "LoginForm",
    
    // Define the component's data properties.
    //The data property is defined to hold the component's data. 
    //It includes three properties: isInit, isLoggedIn, and userName. 
    //These properties will be used to manage the component's state.
    data: () => ({
        isInit: false,       // A flag to check if the component is initialized. is initially set to false, indicating that the component is not yet initialized.
        isLoggedIn: false,   // A flag to check if the user is logged in. is initially set to false, indicating that the user is not logged in.
        userName: ''         // A variable to store the user's name. is initially set to an empty string and will be used to store the user's first name.
    }),
    mounted() {
        if (this.$cookies.isKey('user_session')) {
            this.isLoggedIn = true
            const userData = decodeCredential(this.$cookies.get('user_session'))
            this.userName = userData.given_name
        }
    },
    
    // Define the component's methods.
    //The methods property is defined to include the callback method, 
    //which will handle the response from Google login.
    methods: {
        // Callback function that handles the response from Google login.
        //The callback method is called when a response is received from Google login. 
        //It sets isLoggedIn to true to indicate that the user is now logged in.
        callback: function(response){
            // Set the 'isLoggedIn' flag to 'true' to indicate that the user is logged in.
            this.isLoggedIn = true
            
            // Decode the user's credentials from the Google login response.
            //It decodes the user's credentials from the Google login response using the decodeCredential function.
            const userData = decodeCredential(response.credential)
            
            // Log the user's data to the console for debugging purposes.
            console.log(userData)
            
            // Store the user's first name in the 'userName' variable.
            //Finally, the user's first name is extracted from the decoded data and stored in the userName variable.
            this.userName = userData.given_name
            this.$cookies.set('user_session', response.credential)
            fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: userData.email
                })
            })
            .then(() => {
                console.log('session saved')
            })
        },
        handleLogOut: function () {
            googleLogout()
            this.$cookies.remove('user_session')
            this.isLoggedIn = false
        }
    }
}
</script>