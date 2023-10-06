<template>
    <div class="mainView">
        <div>
            <router-link to="/library" custom v-slot="{ navigate }">
                <button @click="navigate" role="link">
                    Library home
                </button>
            </router-link>
        </div>
        <div>
            <router-link to="/library/author" custom v-slot="{ navigate }">
                <button @click="navigate" role="link">
                    Search by author
                </button>
            </router-link>
        </div>
        <div>
            <router-link to="/library/book" custom v-slot="{ navigate }">
                <button @click="navigate" role="link">
                    Search by book
                </button>
            </router-link>
        </div>
        <div>
            <router-link to="/library/book/new" custom v-slot="{ navigate }">
                <button @click="navigate" role="link">
                    Add new book
                </button>
            </router-link>
        </div>
        <div v-if="this.isLoggedIn">
                <button @click="handleLogout">
                    Logout
                </button>
        </div>
        <div v-else>
            <router-link to="/login" custom v-slot="{ navigate }">
                <button @click="navigate" role="link">
                    Login
                </button>
            </router-link>
            <myButton buttonText="Hello" />
            <myButton buttonText="Hey" />
            <myButton buttonText="Bye" />
        </div>
    </div>
</template>

<script>
import { googleLogout } from 'vue3-google-login'
import myButton from '../buildingBlocks/myButton'
export default {
    name: 'MainNav',
    data: () => ({
        isLoggedIn: false
    }),
    mounted() {
        if (this.$cookies.isKey('user_session')) {
            this.isLoggedIn = true
        }
    },
    methods: {
        handleLogout: function(){
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
<style>
.mainView {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}
</style>