<template>
    <div>
      <h1>Add a new book to the library</h1>
      <div>
        <label for="bookTitle">Book title:</label>
        <input type="text" v-model="bookData.title" name="bookTitle" id="bookTitle" placeholder="book title">
        <label for="author">Author name:</label>
        <input type="text" v-model="bookData.author.name" name="author" id="author" placeholder="book author">
        <label for="publishingDate">Publishing Date:</label>
        <input type="number" v-model="bookData.publishingDate" name="publishingDate" id="publishingDate">
        <button @click="addNewBook">Submit</button>
      </div>
      <p v-if="error">{{ error }}</p>
      <p v-if="success">{{ success }}</p>
    </div>
  </template>
  
  <script>
  const API_URL = 'http://localhost:4000/books/add'
  
  export default {
    name: 'AddNewBook',
    data() {
      return {
        error: '',
        success: '',
        bookData: {
          title: '',
          author: {
            name: '',
          },
          publishingDate: null,
        },
      }
    },
    methods: {
      addNewBook() {
        this.error = ''
        this.success = ''
  
        fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: this.bookData.title,
            author: {
              name: this.bookData.author.name,
            },
            publishingDate: this.bookData.publishingDate,
          }),
        })
          .then((response) => {
            if (response.ok) {
              // Book added successfully
              this.success = 'Book added successfully.'
              this.bookData.title = ''
              this.bookData.author.name = ''
              this.bookData.publishingDate = null
            } else {
              // Handle error response
              throw new Error('Failed to add book')
            }
          })
          .catch((error) => {
            // Handle network or server error
            this.error = 'An error occurred while adding the book. Please try again.'
            console.error(error)
          });
      },
    },
  }
  </script>
  