<template>
    <h1> Users </h1>
    <div class="listView">
        <div class="card" v-for="user in users" :key="user.login">
            <img :src="user.avatar_url" alt="A user">
            <div class="row">
                <div>Name: </div>
                <div>{{ user.login }} </div>
            </div>
            <p><router-link :to="'/users/' + user.login" >View User</router-link></p>
        </div>
    </div>
</template>

<script>
   const API_URL = 'http://localhost:4000/'

    export default {
        name: 'UsersView',
        data: () => ({
            error: '',
            users: []
        }),

        mounted() {
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.users = result
            })
        },
        methods: {}
}
</script>

<style>
    .listView{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2px;
    }

    .card{
        border: 1px solid green;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 10px;
    }

    .row{
        background-color: transparent;
        display: flex;
        gap: 2px;
    }
</style>