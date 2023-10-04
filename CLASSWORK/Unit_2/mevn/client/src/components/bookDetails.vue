<template>
  <header>
    <router-link to="/library"><button class="Main">Main Page</button></router-link>
  </header>
  <div>
    <h1>Book Details</h1>
    <div class="container">
    <h2>Title: <br> {{ book.title }}</h2>
    <h2 v-if="book.author">Author: <br> {{ book.author.name }}</h2>
    <h2>Publishing Date: <br> {{ book.date }}</h2>
    </div>
  </div>
  <router-link to="/library/editBook"><button class="Edit">Edit Book</button></router-link> <button class="Delete" @click="deleteBook">Delete</button>
</template>
  
<script>
import { useRoute } from 'vue-router';
const API_URL = `http://localhost:4000/library`
export default {
  name: 'bookDetails',
  props: {
    id: String,
  },
  data: () => ({
    error: '',
    book: {},
  }),

  mounted() {
    const route = useRoute()
    const bookId = route.params.id

    fetch(`${API_URL}/${bookId}`)
      .then(response => response.json())
      .then(result => {
        this.book = result
      })
  },

  methods: {
    deleteBook: function () {
      fetch(`${API_URL}/${this.book._id}`, {
        method: "DELETE"
      })
      .then(() => {
      const index = this.books.findIndex(book => book._id === this.book._id);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
      this.$router.replace({ name: 'titles' });
    })
    .catch(error => {
      console.error("Error deleting book:", error);
    });
  },
}
}
</script>

<style>
div.container {
  border: 1px dotted rgb(24, 37, 24);
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 10px;
 }
</style>