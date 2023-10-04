<template>
    <h1>Book Details</h1>
      <div class="card" v-bind="book" :key="book._id">
            <h2> {{book.title}}</h2>
            <h3> {{book.description}} </h3>
            <h3>Published Date:  {{new Date(book.publishedDate).toLocaleDateString()}} </h3>
            <p>Written By <router-link :to="'/authors/' + author._id" >  {{ author.name }} </router-link></p>
            <p><button v-on:click="deleteBook"> Detele </button></p>
            <p><button><router-link :to="'/books/addOrUpdate' + book._id" > Update </router-link></button></p>
      </div>
</template>

<script>
  const API_URL = 'http://localhost:4000'
  import { useRoute } from 'vue-router'
   export default {
       name: 'SingleBookView',
       data: () => ({
           error: '',
           book: {},
           author:{}
       }),

       mounted() {
            const route = useRoute()
            console.log(`request book id : ${route.params.id}`);
            fetch(`${API_URL}/books/${route.params.id}`)
           .then(response => response.json())
           .then(result => {
               this.book = result
           })
           .then(() => {
                // retrive a book author
                fetch(`${API_URL}/authors/${this.book.author}`)
                .then(response => response.json())
                .then(result => {
                    this.author = result
                })  
           })
       },
       methods: {
            deleteBook: function (){
                fetch(`${API_URL}/books/${this.book._id}`,{
                  method: "DELETE",
                  headers:{
                      "Content-Type" : "application/json"
                  }
              }).then(() => {
                    this.$router.replace({name: 'All Books'});
                })
            }
       }
   }
</script>

<style>
.listView{
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 2px;
}

.card{
   border: 1px solid green;
   border-radius: 4px;
   display: flex;
   flex-direction: column;
   gap: 2px;
   padding: 10px;
}

.row{
   background-color: transparent;
   display: flex;
   gap: 2px;
}
</style>