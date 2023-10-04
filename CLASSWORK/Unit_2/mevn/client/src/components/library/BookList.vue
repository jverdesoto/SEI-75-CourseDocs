<template>
    <h1>Books</h1>
    <h3>A list of Books</h3>
    <MainNav />
    <ul>
        <div v-for="book in books" :key="book._id">
            <li><router-link :to="`/library/book/${book._id}`">{{ book.title }}</router-link></li>
        </div>
    </ul>
</template>

<script>
import MainNav from './Navigation'
const API_URL = `http://localhost:4000/book`
export default {
    name: 'BookList',
    data: () => ({
        error: '',
        books: []
    }),
    mounted() {
        fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            this.books = result
        })
    },
    components: {
        MainNav
    }
}
</script>