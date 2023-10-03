<template>
    <h2>Author List</h2>
    <router-link to="/library">Go back</router-link>
    <ul>
      <li v-for="author in authors" :key="author._id"><router-link :to="'/library/author/' + author._id">{{ author.name }}</router-link></li>
    </ul>
</template>

<script>
const API_URL = "http://localhost:4000/library/author"

export default {
  name: 'AllAuthors',
  data: () => ({
    error: '',
    authors: []
  }),
  mounted() {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => this.authors = data)
  }
}
</script>