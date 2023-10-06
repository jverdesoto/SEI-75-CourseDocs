<template>
        <h1>Edit "{{ book.title }}" book here</h1>
        <label for="editBookTitle">Book title:</label>
        <input type="text" v-model="book.title" name="editBookTitle" id="editBookTitle" placeholder="book.title">
        <label for="editBookAuthor">Author name:</label>
        <input type="text" v-model="book.author" name="editBookAuthor" id="editBookAuthor" placeholder="book.author.name">
        <label for="publishingDate">Publishing Year:</label>
        <input type="number" v-model="book.publishingDate" name="publishingDate" id="publishingDate" placeholder="book.publishingDate">
        <button @click="editBook">submit update</button>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
    name: 'EditBook',
    data: () => ({
        error: '',
        book: {
            _id: '',
            title: '',
            author: '',   
            publishingDate: null,
        }
    }),
    mounted() {
        const route = useRoute()
        try {
            fetch(`http://localhost:4000/books/list/${route.params.id}`)
                .then(result => result.json())
                .then(data => {
                    this.book._id = route.params.id
                    this.book.title = data.title
                    this.book.author = data.author.name
                    this.book.publishingDate = data.publishingDate
                })
        } catch (error) {
            console.log('could not get data from another page', error)
        }
    },
    methods: {
  async editBook() {
    console.log(this.book);

    const updatedBook = {
      title: this.book.title,
      author: {
        name: this.book.author, 
      },
      publishingDate: this.book.publishingDate,
    };

    await fetch(`http://localhost:4000/books/list/${this.book._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook), 
    })

    this.$router.replace({ name: 'BookList' });
  },
},

}
</script>

