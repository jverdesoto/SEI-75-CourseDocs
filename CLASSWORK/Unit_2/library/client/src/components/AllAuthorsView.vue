<template>
    <h1>All Authors</h1>
   <div class="listView">
       <div class="card" v-for="author in authors" :key="author._id">
               <h2>{{ author.name }} </h2>
               <p><router-link :to="'/authors/' + author._id" > Details </router-link></p>
       </div>
   </div>
</template>

<script>
  const API_URL = 'http://localhost:4000'

   export default {
       name: 'AllAuthorsView',
       data: () => ({
           error: '',
           authors: []
       }),

       mounted() {
           fetch(`${API_URL}/authors`)
           .then(response => response.json())
           .then(result => {
               this.authors = result
           })
       },
       methods: {}
   }
</script>

<style>
.listView{
   /* display: flex;
   justify-content: center;
   flex-wrap: wrap; */
    display: flex;
    flex-direction: column;
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