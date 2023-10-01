<template>
    <div v-if="gitHubRepos">
        <p>{{ gitHubRepos.data.name }}</p>
        <p>a GitHub repository by {{ gitHubRepos.data.owner.login }}</p>
        <p>{{ gitHubRepos.data.description }}</p>
        <p>this is a {{ gitHubRepos.data.visibility }} repository.</p>
    </div>
    <p v-else>there was an {{ error }} loading this page</p>
</template>
<script>
//tell it where to go get the info from
import { useRoute } from 'vue-router'
const API_URL = 'http://localhost:4000/repos'

export default {
    name: 'gitHubRepos',
    data: () => ({
        error: 'data not found',
        gitHubRepos: null
    }),
    async mounted() {
        const route = useRoute()
        const response = await fetch(`${API_URL}/${route.params.user}/${route.params.reponame}`)
        const result = await response.json()
        this.gitHubRepos = result
    }
}
</script>
<style></style>