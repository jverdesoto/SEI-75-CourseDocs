<template>
    <div class="book-list">
      <h1>Books</h1>
      <ul>
        <li v-for="book in sortedBooks" :key="book._id">
            <router-link :to="`/library/titles/${encodeURIComponent(book.title)}`">{{ book.title }}</router-link>
        </li>
      </ul>
      <router-link to="/library" class="library-button">Back to Library</router-link>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        books: []
      };
    },
    computed: {
  sortedBooks() {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    return this.books.sort((a, b) => a.title.localeCompare(b.title));
  }
},
    async mounted() {
      try {
        const response = await axios.get('http://localhost:4000/titles');
        this.books = response.data;
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
  };
  </script>

<style scoped>
.book-list {
    text-align: center;
    position: relative;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px; /* Adjusts the space between list items */
}

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
</style>
