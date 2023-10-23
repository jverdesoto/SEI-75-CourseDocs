<template>
    <div class="book-detail">
      <h1>{{ book.title }}</h1>
      <p><strong>Author: </strong>  
      <router-link :to="`/library/authors/${book.author}`"> {{ book.author }}</router-link></p>      
      <p><strong>Publication Year:</strong> {{ book.date }}</p>

      <button @click="deleteBook" class="delete-button">Delete</button>

      <router-link :to="`/library/edit/${book.title}`" class="edit-button">Edit</router-link>
      
      <router-link to="/library" class="library-button">Back to Library</router-link>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'BookDetail',
    data() {
      return {
        book: {}
      };
    },

    async mounted() {
      try {
        const response = await axios.get(`http://localhost:4000/titles/${this.$route.params.title}`);
        this.book = response.data;
        console.log('Book ID:', this.book._id);
      } catch (error) {
        console.error("Error fetching book details:", error);
        console.log('Book ID:', this.book._id);
      }
    },

    methods: {
    async deleteBook() {
      const confirmDelete = window.confirm('Are you sure you want to delete this book?');
      if (!confirmDelete) {
        return; }
        try {
            await axios.delete(`http://localhost:4000/titles/${this.book.title}`);
            this.$router.push('/library');
        } catch (error) {
            console.error("Error deleting the book:", error);
        }
    }
}}

  </script>
  
  <style scoped>
.library-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4CAF50;  /* Green */
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    position: absolute;
    top: 10px;
    left: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}

.library-button:hover {
    background-color: #45a049; /* Darker green */
}

.book-detail {
    position: relative; /* Ensures that the button positions relative to this container */
    /* Other styles... */
}
.edit-button,
.delete-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: grey;  /* Green */
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border: 2px solid #000000;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 10px;  /* Add a bit of margin */
}

.edit-button:hover {
  background-color: #45a049; /* Darker green */
}

.delete-button {
  background-color: #e44d25; /* A noticeable and intuitive red/orange */
}

.delete-button:hover {
  background-color: #e84118; /* Darker red/orange */
}


</style>

