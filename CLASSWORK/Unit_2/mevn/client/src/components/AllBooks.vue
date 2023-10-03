<template>
  <h2>Book List</h2>
  <router-link to="/library">Go back</router-link>
  <ul>
    <li v-for="book in books" :key="book._id"><router-link :to="'/library/title/' + book._id">{{ book.title }}</router-link></li>
  </ul>
</template>

<script>
const API_URL = "http://localhost:4000/library/title"

export default {
name: 'AllBooks',
data: () => ({
  error: '',
  books: []
}),
mounted() {
  fetch(API_URL)
  .then(response => response.json())
  .then(data => this.books = data)
}
}
</script>