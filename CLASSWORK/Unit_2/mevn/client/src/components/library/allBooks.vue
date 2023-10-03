<template>
    <div class="all-books-container" v-if="books">
        <h1>Our Book Collection</h1>
        <div v-for="book in books" :key="book.id">
            <h3>{{ book.title }}</h3>
            <router-link :to="'/library/authors/' + book.author._id"><p>Author: {{ book.author.name }}</p></router-link>
            <p>Published in {{ book.publishingDate }}</p>
        </div>
    </div>
</template>
<script>

const BOOKS_API = 'http://localhost:4000/library/books'

export default {
    name: 'allBooks',
    data: () => ({
        error: 'no books to display',
        books: []
    }),
    mounted() {
        fetch(BOOKS_API)
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.books = result
            })
    },
    methods: {
    }
}
</script>