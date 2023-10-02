<template>
    <div class="all-books-container" v-if="books">
        <h1>Our Book Collection</h1>
        <div v-for="book in books" :key="book.name">
            <h3>{{ book.title }}</h3>
            <p>Author: {{ book.author }}</p>
            <p>Published in {{ book.publishingDate }}</p>
        </div>
    </div>
</template>
<script>

const BOOKS_API = 'http://localhost:4000/library/books'
const AUTHORS_API = 'http://localhost:4000/library/authors'
export default {
    name: 'allBooks',
    data: () => ({
        error: 'no books to display',
        books: [],
        authors: []
    }),
    mounted() {
        fetch(BOOKS_API)
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.books = result
            })
        fetch(AUTHORS_API)
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.authors = result
            })
    },
    methods: {
        getAuthorName() {
            //compare the books array and the authors array
            //if finds matching ids, replace the id on the books array with the author.name
        }
    }
}
</script>