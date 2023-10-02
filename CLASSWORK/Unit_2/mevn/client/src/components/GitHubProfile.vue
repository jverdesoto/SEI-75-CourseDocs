<template>
<img :src="user.avatar_url" alt="">
<h1><a :href="user.html_url">{{ user.login }}</a></h1>
<p>Public Repos: {{ user.public_repos }}</p>
</template>

<script>
    const API_URL = "http://localhost:4000/user"

    export default {
        name: 'GitHubProfile',
        data: () => ({
            error: '',
            user: {

            }
        }),
        mounted() {
            fetch(`${API_URL}/${this.$route.params.username}`)
            .then(response => response.json())
            .then(result => {
                this.user = result.data
            })
        },
        methods: {}
    }
</script>