<template>
    <h2>{{ author.name }}</h2>
    <ul>
      <li v-for="book in author.books" :key="book._id"><router-link :to="'/library/title/' + book._id">{{ book.title }}</router-link></li>
    </ul>
    <p><button @click="deleteAuthor">Delete Author and all books</button></p>
    <router-link to="/library/author">Go back</router-link>
</template>

<script>
const API_URL = "http://localhost:4000/library/author"
const DELETE_URL = "http://localhost:4000/library/author/delete"

export default {
  name: 'SingleAuthorView',
  data: () => ({
    error: '',
    author: {}
  }),
  mounted() {
    fetch(`${API_URL}/${this.$route.params.id}`)
    .then(response => response.json())
    .then(data => this.author = data)
  },
  methods: {
    deleteAuthor() {
      fetch(DELETE_URL, {
        method: 'DELETE',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          _id: this.author._id
        })
      })
      .then(() => this.$router.replace({ name: 'All Authors' }))
    }
  }
}
</script>