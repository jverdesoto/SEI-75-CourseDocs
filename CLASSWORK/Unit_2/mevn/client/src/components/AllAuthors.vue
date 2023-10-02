<template>
    <h2>Author List</h2>
    <p>{{ authors }}</p>
    <!-- <ul>
      <li v-for="author in authors">{{ author }}</li>
    </ul> -->
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
    .then(data => console.log(data))
    .then(data => {
      this.authors = data
    })
  }
}
</script>