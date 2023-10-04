<template>
    <div>
        <h1 class="page-title">Book Details</h1>
            <div class="book-card">
                <h3>Title:{{ title.title }}</h3>
                <router-link :to=" '/books/authordetails/' + title.author" class="author-link">
                <p>Author: {{ title.author }}</p>
                </router-link>
                <p>Publishing year: {{ title.publishingDate }}</p>
                <button @click="deleteBook">Delete Book</button> <!-- Attach the deleteBook function to a button -->

            </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default  {    
    name: 'TitleSingle',
    data: () => ({
        errors: '',
        title:{}
    }),
    mounted() {
        const route = useRoute()
        console.log(route.params)
        fetch(`http://localhost:4000/books/titledetails/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            this.title = result
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

<style>
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
  width: 400px;
  text-align: center;
  background-color: #f0f0f0; /* Background color for the card */
}

.author-link {
  text-decoration: none;
  color: #007BFF; /* Link color */
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