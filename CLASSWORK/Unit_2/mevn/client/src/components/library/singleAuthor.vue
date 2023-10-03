<template>
    <div class="single-author-container">
        <div v-if="author">
            <h1>{{ author.name }}</h1>
            <h3>Books by this author in our collection:</h3>
            <div v-for="book in booksByAuthor" :key="book._id">
            <p>{{ book.title }}</p>
            </div>
        </div>
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