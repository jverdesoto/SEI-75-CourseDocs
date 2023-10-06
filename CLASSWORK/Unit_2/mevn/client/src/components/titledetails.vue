<template>
    <div>
        <h1 class="page-title">Book Details</h1>
            <div class="book-card">
                <h3>Title:{{ title.title }}</h3>
                <router-link :to=" '/books/authordetails/' + title.author" class="author-link">
                <p class="author-name">Author: {{ title.author }}</p>
                </router-link>
                <p>Publishing year: {{ title.publishingDate }}</p>
                <button @click="deleteBook" class="action-button delete-button">Delete Book</button> <!-- Attach the deleteBook function to a button -->
                <router-link :to="'/books/edit/' + id" class="action-button edit-button">
        Edit Book
      </router-link>

            </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default  {    
    name: 'TitleSingle',
    data: () => ({
        errors: '',
        title:{},
        id: ''
    }),
    mounted() {
        const route = useRoute()
        console.log(route.params)
        fetch(`http://localhost:4000/books/titledetails/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            this.title = result
            this.id = route.params.id
        })
    },
    methods: {
        deleteBook: function () {
            console.log(this.title._id)
            // const route = useRoute()
            // fetch(`http://localhost:4000/books/titledetails/${route.params.id}`,{
            fetch(`http://localhost:4000/books/titledetails/${this.title._id}`,{
                method: "DELETE"
            })
            .then(() => {
                this.$router.replace({name: 'titleList'})
            })
        } 
    }
}
</script>

<style scoped>
.page-title {
  text-align: center;
  padding: 20px;
  font-size: 36px;
  margin-bottom: 20px;
}

.book-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: auto; /* Allow the card to expand to fit content */
  text-align: center; /* Align content to the left */
  max-width: 600px; /* Limit the maximum width for readability */
  margin: 0 auto; /* Center the card horizontally */
}

.author-link {
  text-decoration: none;
  color: black;
}

.author-name:hover {
  text-decoration: underline;
}

.action-button {
  background-color: #998877;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;
  width: 150px; /* Set a fixed width for buttons */
  font-size: 16px; /* Set font size for buttons */
}

.action-button:hover {
  background-color: #778899;
}

.delete-button {
  background-color: #997777; /* Red color for delete button */
}

edit-button {
  text-decoration: none; /* Remove underline from the Edit Book link */
}

/* Additional styles for h3 and p elements if needed */
h3 {
  font-size: 24px;
  margin: 10px 0;
}

p {
  font-size: 16px;
  margin: 5px 0;
}
</style>