<template>
    <div class="form-container">
      <div class="form-content">
        <h1>EDIT BOOK</h1>
        <form @submit.prevent="updateBook" class="book-form">
          <input
            type="text"
            v-model="book.title"
            name="bookTitle"
            placeholder="Book Title"
            class="form-input"
          />
          <input
            type="text"
            v-model="book.publishingDate"
            name="publishingDate"
            placeholder="Date Published"
            class="form-input"
          />
          <input
            type="text"
            v-model="book.author"
            name="authorName"
            placeholder="Author Name"
            class="form-input"
          />
          <button type="submit" class="submit-button">Edit Book</button>
        </form>
      </div>
    </div>
  </template>

<script>
 import { useRoute } from 'vue-router';
export default {
   
    // Define the name of the Vue.js component.
    name: "EditBook",

    // Define the initial data for the component.
    data: () => ({
        error: '', // Used for storing error messages (not currently used).
        book: {
            bookTitle: '', // Initialize the 'name' property of 'cat' as an empty string.
            publishingDate: '',   // Initialize the 'age' property of 'cat' as an empty string.
            authorName: '' // 
        }
    }),
    mounted() {
    // Fetch existing book data based on route params (book ID) and populate the 'book' object.
    const route = useRoute();
    console.log(route.params);
    fetch(`http://localhost:4000/books/titledetails/${route.params.id}`)
      .then(response => response.json())
      .then(result => {
        this.book = result; // Update 'book' with existing book data
        console.log(result)
      })
  },

    methods: {
        // This method is called when the "Add New Book" button is clicked.
        updateBook: function () {
   
            
            // Make an HTTP PUT request to edit a new book.
            fetch(`http://localhost:4000/books/titledetails/${this.book._id}`, {
                method: "PUT", // Specify that this is a POST request.
                headers: {
                    "Content-Type": "application/json" // Set the request content type to JSON.
                },
                body: JSON.stringify(this.book)
            })
            .then(() => {
                // this.book.replace({ name: 'TitleSingle', params: { id: this.book._id } })
                this.$router.push({ name: 'titleDetails', params: { id: this.book._id } });

                // router.push({ name: 'EditBook' })
            }) 
        }
    }
}


</script>

<style>

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.form-content {
  text-align: center;
}

.book-form {
  text-align: center;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #5e9e77;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #4d8c6b;
}
</style>