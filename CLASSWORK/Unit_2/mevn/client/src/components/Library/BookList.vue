<template>
    <h1>Browse through our books</h1>
    <div v-for="book in books" :key="book.id">
        <p><router-link :to="'/books/list/' + book._id">{{ book.title }}</router-link></p>
        <p><router-link :to="'/books/authors/' + book.author._id">Author: {{ book.author.name }}</router-link></p>
        <p>Published in {{ book.publishingDate }}</p>
      </div>
  </template>

  <script>

const API_URL = 'http://localhost:4000/books/list'

  export default {
    name: 'BookList',
    data: () => ({
        error: '',
        books: []
    }),
    mounted() {
        fetch(API_URL)
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.books = result
            })
    },
    methods: {}
}
  </script>
   
