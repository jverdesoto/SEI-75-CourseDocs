<template>
    <div class="all-authors-container" v-if="authors">
        <h1>Authors in our Collection</h1>
        <p>(click each for more details)</p>
        <div v-for="author in authors" :key="author._id" class="author-name">
            <h3><router-link :to="'/library/authors/' + author._id" class="router-link">{{ author.name }}</router-link></h3>
        </div>
    </div>
</template>
<script>
const DATA_URL = "http://localhost:4000/library/authors"

export default {
    name: 'allAuthors',
    data: () => ({
        error: 'no authors to display',
        authors: []
    }),
    mounted() {
        fetch(DATA_URL)
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.authors = result
            })
    },
    methods: {

    }
}
</script>

<style scoped>
.all-authors-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.router-link {
    text-decoration: none;
    color: inherit
}

.router-link:hover {
    color: orange;
}
</style>