<template>
  <div v-if="authors">
      <h1>Browse all our authors</h1>
      <div v-for="author in authors" :key="author._id">
          <p><router-link :to="'/books/authors/' + author._id">{{ author.name }}</router-link></p>
      </div>
  </div>
</template>
<script>
const API_URL = "http://localhost:4000/books/authors"

export default {
  name: 'AuthorList',
  data: () => ({
      error: '',
      authors: []
  }),
  mounted() {
      fetch(API_URL)
          .then(response => {
              return response.json()
          })
          .then(result => {
              this.authors = result
          })
  },
  methods: {}
}
</script>
<!-- <template>
    <h1>Search Author</h1>
    <div>
      <input v-model="searchAuthor" placeholder="Enter author name"/>
      <button v-on:click="search">Search by Author</button>
      Display search results here 
    </div>
    <div v-for="book in searchResults" :key="book._id">
      {{ book.author }}
    </div>
  </template> -->
  
  <!-- <script>
  export default {
    data() {
      return {
        searchAuthor: '',
        searchResults: [], // Store the search results here
      }
    },
    methods: {
      search() {
        // Make an API request to search for books by title using this.searchAuthor
        fetch(`/books/search/author/${this.searchAuthor}`)
          .then((response) => response.json())
          .then((data) => {
            this.searchResults = data;
          })
          .catch((error) => {
            console.error(error);
          });
        // Update this.searchResults with the results from the API
      },
    },
  }
  </script> -->
