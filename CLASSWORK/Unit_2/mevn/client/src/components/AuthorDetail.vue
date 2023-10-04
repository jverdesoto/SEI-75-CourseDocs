<template>
    <div class="author-detail">
        <h1>{{ authorName }}</h1>
        <ul class="book-list">
            <li v-for="book in books" :key="book._id">
                <router-link :to="`/library/titles/${encodeURIComponent(book.title)}`">{{ book.title }}</router-link>
            </li>
        </ul>
        <router-link to="/library" class="home-button">Back to Library</router-link>
    </div>
</template>

  <script>
  import axios from 'axios';
  
  export default {
    name: 'AuthorDetail',
    data() {
      return {
        authorName: '',
        books: []
      };
    },
    async created() {
      try {
        const response = await axios.get(`http://localhost:4000/authors/${this.$route.params.author}`);
        this.authorName = response.data.authorName;
        this.books = response.data.books;

        console.log('Author Name:', this.authorName);
    } catch (error) {
    console.error("Error fetching author details:", error);
  }
    }
  };
  </script>
  
  <style scoped>
.author-detail {
    text-align: center;
}

.book-list {
    list-style-type: none;  /* Removes bullet points */
    padding: 0;
    margin: 0 auto;
}

li {
    margin-bottom: 10px; /* adjust space between list items */
}

.home-button {
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

.home-button:hover {
    background-color: #45a049; /* Darker green */
}
</style>

