<template>
    <!-- <p><input v-model="book.title" type="text" placeholder="Book title"></p>
    <p><input v-model="book.publishingDate" type="text" name="PublishingDate" placeholder="Book Publishing date"></p>  -->
    <h1>HomePage</h1>
    <p><button><router-link :to="'/AllAuthors'" >Authors</router-link></button></p>
    <p><button><router-link :to="'/AllBooks'" >Books</router-link></button></p>
    <p><button><router-link :to="'/AddBook'" >Add Book</router-link></button></p>
    <p><button><router-link :to="'/login'" >Login</router-link></button></p>
    <myButton buttonText="Hello"/>
    <myButton buttonText="Hey"/>
    <myButton buttonText="Bye"/>
    <!-- <div v-if="this.isLoggedIn">
        <router_link to="/login"><button>Profile</button></router_link>
    </div>
    <div v-else>
        <router-link to="/login"><button>Login</button></router-link>
    </div> -->
</template>
<script>
import myButton from '../buildingBlocks/myButton'
    export default {
        name: 'libraryVue',
        data: () => ({
            error: '',
        }),
        components: {
            myButton
        }
        // mounted() {
        //     if (this.$cookies.isKey("user_session")) {
        //     this.isLoggedIn = true
        //     }
        // }
    }
</script>