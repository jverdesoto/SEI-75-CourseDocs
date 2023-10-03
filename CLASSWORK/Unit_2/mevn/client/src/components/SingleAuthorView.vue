<template>
    <h2>{{ author.name }}</h2>
    <ul>
      <li v-for="book in author.books" :key="book._id"><router-link :to="'/library/title/' + book._id">{{ book.title }}</router-link></li>
    </ul>
    <router-link to="/library/author">Go back</router-link>
</template>

<script>
const API_URL = "http://localhost:4000/library/author"

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
  }
}
</script>