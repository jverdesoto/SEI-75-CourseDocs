<template>
    <img :src="book.coverURL" class="book-cover">
    <h2>{{ book.title }}</h2>
    <p>{{ book.pubDate }}</p>
    <p><router-link :to="'/library/author/' + book.authorId">{{ book.author }}</router-link></p>
    <p><button @click="updateToggle = true">Update Book</button></p>
    <p><button @click="deleteBook">Delete Book</button></p>
    <div v-if="updateToggle">
      <p><label for="title">Update Title:</label></p>
      <p><input type="text" v-model="book.title" id="title"></p>
      <p><label for="author">Update Author:</label></p>
      <p><input type="text" v-model="book.author" id="author"></p>
      <p><label for="pubdate">Update Publication date:</label></p>
      <p><input type="date" v-model="book.pubDate" id="pubdate"></p>
      <p><label for="cover">Update Front Cover URL:</label></p>
      <p><input type="url" v-model="book.coverURL" id="cover"></p>
      <p><button @click="update">Submit Book</button></p>
    </div>
</template>

<script>
const API_URL = "http://localhost:4000/library/title"
const UPDATE_URL = "http://localhost:4000/library/update"
const DELETE_URL = "http://localhost:4000/library/update/title/delete"

export default {
name: 'SingleBookView',
data: () => ({
  error: '',
  book: {},
  updateToggle: false
}),
mounted() {
  fetch(`${API_URL}/${this.$route.params.id}`)
  .then(response => response.json())
  .then(data => {
    this.book = data
  })
},
methods: {
  update() {
    fetch(`${UPDATE_URL}/${this.book._id}`, {
      method: 'PUT',
      headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: this.book.title,
            author: this.book.author,
            pubDate: this.book.pubDate,
            coverURL: this.book.coverURL
        })
    })
    .then(result => console.log(result))
  },
  deleteBook() {
    fetch(DELETE_URL, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: this.book._id
      })
    })
    .then(() => this.$router.replace({ name: 'All Books' }))
  }
}
}
</script>

<style>
  .book-cover {
    width: 300px;
  }
</style>