<template>
  <div class="single-book-container">
    <h1>{{ book.title }}</h1>
    <p>{{ book.date }}</p>
    <div id="authorLink">
      <router-link :to="'/Author/' + author._id">
        <h1>{{ author.name }}</h1>
      </router-link>
    </div>
    <p>
      <button @click="deleteBook">Delete</button>
      <router-link :to="'/EditBook/' + book._id">
        <button @click="editBook">Edit Book</button>
      </router-link>
    </p>
    <p>
      <router-link :to="'/AllBooks'">
        <button>Back</button>
      </router-link>
    </p>
  </div>
</template>
  

<script>
import { useRoute } from 'vue-router'
export default {
  name: 'bookVue',
  data: () => ({
    error: '',
    book: {},
    author: {},
    id: ''
  }),

  mounted() {
    const route = useRoute()
    fetch(`http://localhost:4000/Book/${route.params.id}`)
      .then((response) => response.json())
      .then((result) => {
        this.book = result.book
        this.author = result.author
        this.id = route.params.id
        console.log("This.books", result)
      })
      .catch((error) => {
        this.error = 'Error fetching data: ' + error;
      });
  },
  methods: {
    deleteBook: function () {
      console.log(this.id);
      fetch(`http://localhost:4000/Book/${this.id}`, {
        method: "DELETE"
      })
        .then(() => {
          this.$router.replace({ name: 'AllBooks' })
        }
        )
    }
  },
};
</script>
<style scoped>
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

/* Specific styles for the "Single Book" page */
.single-book-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.single-book-container h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.single-book-container p {
  font-size: 18px;
  margin-bottom: 10px;
}

.single-book-container button {
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

.single-book-container button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

#authorLink:hover {
  color: #007bff;
}
</style>
