<template> 
    <h1> {{books.title}} </h1>
    <h2>Written by {{ author }}</h2>
    <h2>Published on  {{ books.publishingDate }}</h2>
    <p><router-link :to="`/library/book/edit/${books._id}`">Edit Book</router-link></p>
    <button @click="deleteBook">Delete Book</button>
</template>

<script>
import { useRoute } from 'vue-router'
    const API_URL = 'http://localhost:4000/library/book'

export default { //exports the entire vue object to be used
    name: 'JustOneBook', // name of hte bue component 
    data: () => ({
        error: '',
        books: [],
        author: ''
    }),

    mounted() { // this is a vue thing that is called once is the vue object is mounted or loaded by the app
        const route = useRoute()
        console.warn(route.params)
        fetch(`${API_URL}/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            this.books = result
            this.author = result.author.name;
        })
    },
    methods: {
        deleteBook() {
            fetch(`${API_URL}/${this.books._id}`, {
                method: 'DELETE'
            })
            .then (() => {
                this.$router.push({name: 'libraryBookList'})
            })
        }
    }
}
</script>