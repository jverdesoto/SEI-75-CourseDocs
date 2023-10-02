<template>
    <h2>Add Book</h2>
    <p><label for="title">Book Title:</label></p>
    <p><input type="text" v-model="book.title" id="title" placeholder="Game of Thrones"></p>
    <p><label for="author">Author:</label></p>
    <p><input type="text" v-model="book.author" id="author" placeholder="George R. R. Martin"></p>
    <p><label for="pubdate">Publication date:</label></p>
    <p><input type="date" v-model="book.pubDate" id="pubdate"></p>
    <p><label for="cover">Front Cover URL:</label></p>
    <p><input type="url" v-model="book.coverURL" id="cover"></p>
    <p><button @click="submitBook">Submit Book</button></p>
    <p v-if="book.submitted">Your book was submitted!</p>
</template>

<script>
export default {
  name: 'AddBook',
  data: () => ({
    error: '',
    book: {
      title: '',
      author: '',
      pubDate: '',
      coverURL: '',
      submitted: false
    }
  }),
  methods: {
    submitBook() {
      fetch('http://localhost:4000/library/add-book', {
        method: "POST",
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
      .then(res => console.log(res.status))
      .then(this.book.submitted = true)
    }
  }
}
</script>