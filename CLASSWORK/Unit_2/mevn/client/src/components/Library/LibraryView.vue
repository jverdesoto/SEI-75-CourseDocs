<template>
   <h1>Welcome to the library</h1>
   <!-- <button v-on:click="searchTitle">Search by Title</button>
   <button v-on:click="searchAuthor">Search by Author</button>
   <button v-on:click="addBook">Add new book</button> -->
   <button><router-link :to="'/books/list'" class="router-link">Search for books</router-link></button>
   <button><router-link :to="'/books/authors'" class="router-link">Search for authors</router-link></button>
   <button><router-link :to="'/books/add'" class="router-link">Add a new book</router-link></button>
</template>


<script>
export default {
    name: 'LibraryView',

    methods: {
    // searchTitle() {
    //   // Handle the logic for searching by title
    //     this.$router.push(`/books/list`);
    //     console.log('Searching by title');
    // },

    // },
    // searchAuthor() {
    //   // Handle the logic for searching by author
    //   this.$router.push('/books/authors')
    //   console.log('Searching by author');
    // },
    // addBook() {
    //   // Handle the logic for adding a new book
    //   this.$router.push('/books/add')
    //   console.log('Adding a new book');
    }
  }
</script>