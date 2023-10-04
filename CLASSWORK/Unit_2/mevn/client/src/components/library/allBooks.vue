<template>
    <div class="all-books-container" v-if="books">
        <h1>Our Book Collection</h1>
        <p>click on the item for more details</p>
        <div class="books-list-container">
            <div v-for="book in books" :key="book.id" class="one-book-listing">
                    <h4><router-link :to="'/library/books/' + book._id" class="router-link">{{ book.title }}</router-link></h4>
                    <p><router-link :to="'/library/authors/' + book.author._id" class="router-link">Author: {{ book.author.name }}</router-link></p>
                <p>Published in {{ book.publishingDate }}</p>
            </div>
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

<style scoped>
.all-books-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.one-book-listing {
    border-style: solid;
    padding: 10px;
}

.one-book-listing > h4 {
    text-align: center;
}
.router-link {
    text-decoration: none;
    color: inherit
}

.router-link:hover {
    color:orange;
}
</style>