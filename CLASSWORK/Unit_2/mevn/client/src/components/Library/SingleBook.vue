<template>
  <div v-if="book">
    <h1>{{ book.title }}</h1>
    <h2>Author: <router-link :to="'/books/authors/' + book?.author?._id" class="router-link">{{ book?.author?.name }}</router-link></h2>
    <p>Publication Date: {{ book.publishingDate }}</p>
    <div>
      <button @click="removeBook">Delete book from your library</button>
      <button @click="edit">Edit this book</button>
    </div>
  </div>
</template>


<script>
import { useRoute } from 'vue-router';
const API_URL = 'http://localhost:4000/books/list'

export default {
  name: 'SingleBook',
  data() {
  return {
    error: '',
    book: {
      _id: '',
      title: '',
      author: '',
      publishingDate: null, 
    },
  }
},
mounted() {
  try {
    const route = useRoute();
    fetch(`${API_URL}/${route.params.id}`)
      .then((response) => response.json())
      .then((result) => {
        this.book = result;
      });
  } catch (error) {
    console.log('cannot retrieve', error);
  }
},

  methods: {
      async removeBook() {
          try {
              await fetch(`${API_URL}/${this.book._id}`, { method: 'DELETE' })
              this.status = "book deleted"
              console.log('the book has been deleted')
              this.$router.replace({
                  name: 'BookList'
              })
          } catch (error) {
              console.log('cannot delete', error)
          }
      },
      edit() {
          this.$router.push({
        name: 'EditBook',
        params: { id: this.book._id }
      })
      }
  }
}
</script>