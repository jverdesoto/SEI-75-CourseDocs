<template>
    <h1>Authors Details</h1>
   <div class="listView">
       <div class="card" v-bind="author" :key="author._id">
               <div>{{ author.name }} </div>
                <div class="row" v-for="book in books" :key="book._id">
                    <h2>{{ book.title }}</h2>
                </div>
       </div>
   </div>
</template>

<script>
  const API_URL = 'http://localhost:4000'
  import { useRoute } from 'vue-router'
   export default {
       name: 'SingleAuthorView',
       data: () => ({
           error: '',
           author: {},
           books:[]
       }),

       mounted() {
            const route = useRoute()
            console.log(`request author id : ${route.params.id}`);
            fetch(`${API_URL}/authors/${route.params.id}`)
           .then(response => response.json())
           .then(result => {
               this.author = result
           })
           .then(() => {
                // TODO retrive all books for the author
                fetch(`${API_URL}/authors/${route.params.id}/books`)
                .then(response => response.json())
                .then(result => {
                    this.books = result
                })  
           })
       },
       methods: {}
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