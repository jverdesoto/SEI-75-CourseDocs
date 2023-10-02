<template>
    <div class="all-authors-container" v-if="authors">
        <h1>Authors in our Collection</h1>
        <div v-for="author in authors" :key="author._id">
            <p>{{ author.name }}</p>
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