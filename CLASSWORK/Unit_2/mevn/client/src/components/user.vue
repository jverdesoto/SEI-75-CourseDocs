<template>
    <h1>{{ this.result.login }}</h1>
    <img :src="this.result.avatar_url" alt="">
    <p>ID: {{ this.result.id }}</p>
</template>

<script>
const ROOT_URL = 'http://localhost:4000/user'
export default {
    name: 'FindUser',
    data() {
        return {
            result: ''
        }
    },
    mounted() {
        const user = this.$route.params.user
        fetch(`${ROOT_URL}/${user}`)
            .then(response => response.json())
            .then(result => {
                this.result = result
            })
    }
}

</script>