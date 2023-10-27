<template>
     <div v-if="data.author">
     <h2>{{ data.author.name }}</h2>
     <ul>
      <div v-for="book in data.books" :key="book._id">
        <router-link :to="'/Book/' + book._id" class="book-link">
          <h1>{{ book.title }}</h1>
        </router-link>
        </div>
        <router-link :to="'/AllBooks'">
          <button>Back</button>
        </router-link>
      </ul>
        
   
    </div>
  </template>
  
  
  <script>
  import { useRoute } from 'vue-router'
  
  export default {
    name: 'AuthorVue',
    data() {
      return {
        error: '',
          data: {}
      }
    },
    mounted() {
      const route = useRoute()
      fetch(`http://localhost:4000/Author/${route.params.id}`)
        .then((response) => response.json())
        .then((result) => {
          this.data = result
        })
        .catch((error) => {
          this.error = 'Error fetching data: ' + error;
        });
    },
    methods: {},
  };
  </script>
  <style>
  /* Reuse styles for the container and buttons */
  .home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .title {
    font-size: 48px;
    margin-bottom: 20px;
    color: #333;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .buttons-container {
    display: flex;
    gap: 20px;
  }
  
  .nav-button {
    padding: 15px 30px;
    font-size: 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-transform: uppercase;
  }
  
  .nav-button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  /* Specific styles for the "Single Author" page */
  .single-author-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    padding: 20px;
  }
  
  .single-author-container h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .book-link {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
  }
  
  .book-link:hover {
    color: #007bff;
  }
  </style>
  