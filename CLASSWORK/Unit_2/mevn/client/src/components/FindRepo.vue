<template>
    <h1>{{  this.result.name }}</h1>
    <p>{{ this.result.description }}</p>
</template>

<script>
    const ROOT_URL = 'http://localhost:4000/repo'

    export default {
        name: 'FindUser',
        data() {
            return {
            result: ''
            }
        },

        mounted() {
            const user= this.$route.params.user
            const repo= this.$route.params.reponame
            fetch(`${ROOT_URL}/${user}/${repo}`)
            .then(response => response.json())
            .then(result => {
                this.result = result.data
            })
        },
    }
</script>