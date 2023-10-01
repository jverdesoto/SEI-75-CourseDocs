<template>
    <h1> User Repooooos </h1>
    <div class="listView">
        <div class="card" v-for="repo in repos" :key="repo.id">
            <h2>{{repo.name}}</h2>
            <h3>{{repo.description}}</h3>
            <!-- <a href="{{repo.html_url}}">Link</a> -->
        </div>
    </div>
</template>

<script>
   import { useRoute } from 'vue-router'
    const API_URL = 'http://localhost:4000/users'

    export default {
        name: 'UserReposListView',
        data: () => ({
            error: '',
            repos: []
        }),

        mounted() {
            const route = useRoute()
            console.log(route.params.id)
            fetch(`${API_URL}/${route.params.id}/repos`)
            .then(response => response.json())
            .then(result => {
                this.repos = result
            })
        },
        methods: {}
    }
</script>

<style>
    .listView{
        display: flex;
        justify-content: center;
        flex-direction: column;
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
</style>