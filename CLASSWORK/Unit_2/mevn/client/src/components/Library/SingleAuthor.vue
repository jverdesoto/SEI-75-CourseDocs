<template>
    <div>
      <h1>{{ author.name }}</h1>
      <div v-for="book in authorBooks" :key="book._id">
        <router-link :to="'/books/list/' + book._id">{{ book.title }}</router-link>
      </div>
    </div>
  </template>
  
  
  <script>
  import { useRoute } from 'vue-router';
  const API_URL = 'http://localhost:4000/books/authors'
  
  export default {
    name: 'SingleAuthor',
    data: () => ({
        error: '',
        author: {},
        authorBooks: []
    }),
    mounted() {
        try {
            const route = useRoute()
            fetch(`${API_URL}/${route.params.id}`)
            .then(response => {
                    return response.json()
                })
                .then(result => {
                    this.author = result.author
                    this.authorBooks = result.authorBooks
                })
        } catch (error) {
            console.log('cannot retrieve data', error)
        }
    },
    methods: {}
}
  </script>
  