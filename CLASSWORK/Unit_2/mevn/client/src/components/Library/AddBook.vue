<template>
    <div class="add-book-container">
      <h1>Add a Book</h1>
      <p><input v-model="book.title" type="text" placeholder="Book Title"></p>
      <p><input v-model="book.date" type="text" placeholder="Book Date"></p>
      <p><input v-model="book.author" type="text" placeholder="Book Author"></p>
      <p><button @click="AddBook">Add New Book</button></p>
      <p><RouterLink :to="'/'"><Button>Home</Button></RouterLink></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookAddNew',
    data: () => ({
      error: '',
      book: {
        title: '',
        date: '',
        author: ''
      }
    }),
    methods: {
      AddBook: function () {
        console.log(`New book ${this.book.title} - ${this.book.date} - ${this.book.author}`);
        fetch('http://localhost:4000/AddBook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: this.book.title,
            date: this.book.date,
            author: this.book.author
          })
        })
        .then(res => {
          console.log(res.status);
          this.book.title = '';
          this.book.date = '';
          this.book.author = '';
        })
      }
    }
  }
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
  
  /* Specific styles for the "Add Book" page */
  .add-book-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
  }
  
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    width: 300px; /* Adjust the width as needed */
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  button {
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
  
  button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  </style>
  
