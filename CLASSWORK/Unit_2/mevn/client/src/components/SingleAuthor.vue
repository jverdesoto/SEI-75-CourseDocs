<template>
    <!-- <h1>Hello</h1> -->
    <h1 id="authorOrBookName">{{ author }}</h1>
    <ul>
        <li v-for="book in books" :key="book.id">
            {{ book.title }}
        </li>
    </ul>
</template>

<script>
    import { useRoute } from 'vue-router'
    const API_URL = "http://localhost:4000/authors";
    // const API_URL2 = "http://localhost:4000/authors/:id/books"
    export default {
        name: 'SingleAuthor',
        data: () => ({
            error: '',
            author: '',
            books: []
        }),
        mounted() {
            const route = useRoute()
            console.warn(route.params.id)

            fetch(`${API_URL}/${route.params.id}/books`)
            .then(response => response.json())
            .then(result => {
            this.books = result.booksByAuthor
            this.author = result.author.name
            })
        },
        methods: {}
    }    
</script>