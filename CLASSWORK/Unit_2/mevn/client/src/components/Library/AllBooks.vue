<template>
    <h1>All Books:</h1>
    <div class="all-books-container">
      <div v-for="book in books" :key="book._id">
        <router-link :to="'/Book/' + book._id" class="book-link">
          <h1>{{ book.title }}</h1>
        </router-link>
      </div>
      <p><RouterLink :to="'/'"><Button>Home</Button></RouterLink></p>
    </div>
  </template>
  

<script>
export default {
    name: 'AllBooks',
    data: () => ({
        error: '',
        books: [],
    }),

    mounted() {
        fetch('http://localhost:4000/Allbooks')
            .then((response) => response.json())
            .then((result) => {
                this.books = result
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

/* Specific styles for the "All Books" page */
.all-books-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
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
