<template>
    <div class="single-author-container">
        <!-- <div v-if="author"> -->
            <h1>{{ author.name }}</h1>
            <p>Books by this author in our collection:</p>
            <div v-for="book in booksByAuthor" :key="book._id">
            <h4>{{ book.title }}</h4>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
const API_URL = 'http://localhost:4000/library/authors'

export default {
    name: 'singleAuthor',
    data: () => ({
        error: 'no author to display',
        author: {},
        booksByAuthor: []
    }),
    mounted() {
        const route = useRoute()
        try {
            fetch(`${API_URL}/${route.params.id}`)
                .then(response => {
                    return response.json()
                })
                .then(result => {
                    this.author = result.author
                    this.booksByAuthor = result.booksByAuthor
                })
        } catch (error) {
            console.log('problems at the frontend', error)
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.single-author-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>