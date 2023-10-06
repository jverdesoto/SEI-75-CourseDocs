<template>
    <button><router-link :to="'/books/'" >Search By Title</router-link></button>
    <button><router-link :to="'/authors/'" >Search By Author</router-link></button>
    <button><router-link :to="'/books/addOrUpdate/-1'" >Add New Book</router-link></button>
    <button class="btn btn-primary"><router-link :to="'/login'" >Login</router-link></button>
    <!-- <div v-if="this.isLoggedIn">
        <button><router-link :to="'/login'" >Login</router-link></button>
    </div>
    <div v-else>
        <button><router-link :to="'/login'" >Logout</router-link></button>
    </div> -->
</template>

<script>

// export default {
//     name: "HomeView",
//     data: () => ({
//         isInit: false,
//         isLoggedIn: false,
//         userObject:{}
//     }),
//     mounted(){
//         if(this.$cookies.isKey('user_session')){
//             this.isLoggedIn = true
//             // this.userObject = userData; 
//         }
//     },
//     methods: {
//         callback: function (response) {
//             this.isLoggedIn = true
//             // let userData = decodeCredential(response.credential)
//             // TODO delete this line
//             // userData = {email: "heba.arafat159@gmail.com", given_name:"Heba"}
//             console.log(userData);
//             this.userObject = userData;
//         },
//         handleLogOut: function () {
//             // googleLogout()
//             this.$cookies.remove('user_session')
//             this.isLoggedIn = false
//         }
//     }
// }
</script>
