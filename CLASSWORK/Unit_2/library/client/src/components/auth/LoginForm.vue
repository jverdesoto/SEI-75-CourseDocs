<template>
    <h1>Login form</h1>
    <!-- <button @click="handleLohgin"></button> -->
    <GoogleLogin :callback = "callback"/>
</template>
<script>
 export default {
    name: 'LoginForm',
    data:()=>({
        isInit:false,
        isLoggedIn:false
    }),
    methods:{
        handleLohgin: async function(){
            console.log(this.$gAuth.getAuthCode());
            // const authCode = await this.$gAuth.getAuthCode();
            // const response = await this.$http.post(process.env.GOOGLE_CALLBACK,{code: })
        },
        callback:(response) => {
            console.log(response);
            
        }
    }

}
</script>