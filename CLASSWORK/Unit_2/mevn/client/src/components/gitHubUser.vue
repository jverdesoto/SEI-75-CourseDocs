<template>
    <p>Hello</p>
    <div v-if="gitHubUser && gitHubUser.data">
        <p> {{ gitHubUser.data.name }}</p>
        <p> {{ gitHubUser.data.bio }}</p>
        <img :src="gitHubUser.data.avatar_url" :alt="gitHubUser.data.name" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
const API_URL = 'http://localhost:4000/user'

export default {
    name: 'gitHubUser',
    data: () => ({
        error: 'user not found',
        gitHubUser: {}
    }),
    mounted() {
        const route = useRoute()
        fetch(`${API_URL}/${route.params.user}`)
            .then(response => response.json())
            .then(result => {
                this.gitHubUser = result
                console.log(this.gitHubUser)
            })

    }
}
</script>
<style></style>