<template>
    <div>
      <h1>Edit {{ book.title }}</h1>
      <form @submit.prevent="updateBook">
        <label>Title: </label>
        <input v-model="book.title" required /><br>
  
        <label>Author: </label>
        <input v-model="book.author" required /><br>
  
        <label>Date: </label>
        <input v-model="book.date" required /><br>
  
        <button type="submit">Save</button>
      </form>
      <router-link :to="`/books/${book.title}`">Cancel</router-link>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      book: {}
    };
  },
  async created() {
    try {
    const response = await axios.get(`http://localhost:4000/titles/${this.$route.params.title}`);
    this.book = response.data;
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
  },
  methods: {
    async updateBook() {
      try {
        await axios.put(`http://localhost:4000/book/${this.book._id}`, this.book);
        this.$router.push(`/books/${this.book.title}`);
      } catch (error) {
        console.error("Error updating the book:", error);
      }
    }
  }
}
</script>

<style scoped>

.delete-button {
    padding: 10px 20px;
    background-color: #ff4757;  /* Red */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  </style>