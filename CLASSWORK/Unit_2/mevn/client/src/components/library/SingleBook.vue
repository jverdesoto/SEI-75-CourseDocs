<template>
    <h1>Book</h1>
    <h3>Single book</h3>
    <MainNav />
    <h2>{{ book.title }}</h2>
    <p><strong>Year published: </strong>{{ book.publishDate }}</p>
    <div v-if="book.author">
        <p><strong>Author: </strong> <router-link :to="`/library/author/${book.author._id}`">{{ book.author.name }}</router-link></p>
    </div>
    <p><router-link :to="`/library/book/edit/${book._id}`"><button>Edit Book</button></router-link></p>
    <p><button @click="deleteBook">Delete Book</button></p>
</template>

<script>
import { useRoute } from 'vue-router'
import MainNav from './Navigation'
const API_URL = `http://localhost:4000/book`

export default {
    name: 'SingleBook',
    data: () => ({
        error: '',
        book: {}
    }),
    mounted() {
        const route = useRoute()
        fetch(`${API_URL}/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            this.book = result
        })
    },
    components: {
        MainNav
    },
    methods: {
        editBook: function () {

        },
        deleteBook: function () {
            fetch(`${API_URL}/${this.book._id}`,{
                method: "DELETE"
            })
            .then(() => {
                this.$router.replace({ name: 'LibrayBookList' })
            })
        }
    }
}
</script>