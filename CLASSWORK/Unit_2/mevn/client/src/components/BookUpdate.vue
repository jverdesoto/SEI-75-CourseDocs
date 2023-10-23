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
        
        <div class="button-group">
            <router-link :to="`/library/titles/${book.title}`" class="cancelBtn">Cancel</router-link>
          <button class='saveBtn' type="submit">Save</button>
        </div>

      </form>
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
  async mounted() {
    try {
    const response = await axios.get(`http://localhost:4000/titles/${this.$route.params.title}`);
    this.book = response.data;
  } catch (error) {
    console.error("Error fetching book details:", error);
  }},

  methods: {
    async updateBook() {
      try {
        await axios.put(`http://localhost:4000/book/${this.book._id}`, this.book);
        this.$router.push(`/library/titles/${this.book.title}`);
      } catch (error) {
        console.error("Error updating the book:", error);
      }
    }
  }
}
</script>

<style scoped>

.saveBtn {
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
  margin: 15px 10px;  /* Add a bit of margin */
}

.saveBtn:hover {
  background-color: #45a049; /* Darker green */
}

.cancelBtn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f00; /* Red */
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border: 2px solid #000000;
  cursor: pointer;
  border-radius: 4px;
  margin: 15px 10px;
}

.cancelBtn:hover {
  background-color: #c00; /* Darker Red */
}

/* Flexbox CSS to Align Buttons */
.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
}
  </style>