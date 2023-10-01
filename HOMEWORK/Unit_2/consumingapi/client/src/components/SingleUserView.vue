<template>
    <div>
        <h1>User Details</h1>
     
        <div class="card" v-bind="user" :key="user._id">
            <img :src="user.avatar_url" alt="A user">
            <div class="row">
                <div>Name: </div>
                <div>{{ user.login }} </div>
            </div>
            <!-- repos_url -->
            <p><router-link :to="`/users/${user.login}/repos`" >View Repo</router-link></p>
        </div>
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    const API_URL = 'http://localhost:4000/users'

    export default {
        name: 'SingleUserView',
        data: () => ({
            error: '',
            user: {}
        }),

        mounted() {
            const route = useRoute()
            console.log(route.params.id)
            fetch(`${API_URL}/${route.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.user = result
            })
        },
        methods: {}
    }
</script>

<style>
    h3 {
        font-size: 12px;
    }
    img {
        max-width: 200px;
        height: auto;
    }
</style>


