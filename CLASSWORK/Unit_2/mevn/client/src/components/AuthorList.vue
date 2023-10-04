<template>
    <div class="author-list">
      <h1>Authors</h1>
      <ul>
        <li v-for="author in authors" :key="author._id">
          <router-link :to="`/library/authors/${author.name}`">{{ author.name }}</router-link>
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
        authors: []
      };
    },
    async created() {
      const response = await axios.get('http://localhost:4000/authors');
      this.authors = response.data;
    }
  };
  </script>
  
  <style scoped>
  .author-list {
      text-align: center;
      position: relative;
  }
  
  ul {
      list-style-type: none;
      padding: 0;
  }
  
  li {
      margin-bottom: 10px;
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
  