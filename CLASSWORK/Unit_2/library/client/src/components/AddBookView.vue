<template>
    <h1>Add New Book</h1>
    <p><input type="text" name="title" v-model="book.title" placeholder="Book Title"></p>
    <p><input type="text" name="description" v-model="book.description" placeholder="Book Description"></p>
    <p><input type="text" name="publishedDate" v-model="book.publishedDate" placeholder="01/01/2023"></p>
    <p><input type="text" name="author" v-model="book.authorName" placeholder="Jake"></p>
    <p><button v-on:click="addBook"> Save </button></p>
</template>
<script>
  const API_URL = 'http://localhost:4000'

  export default {
    name: 'AddBookView',
    data: () => ({
          error: '',
          book: {
              title:'',
              description:'',
              publishedDate: new Date().toLocaleDateString(),
              authorName:''
          }
      }),

      mounted() {
      },
      methods: {
           // TODO add startfunction to diaply or not book detales 
          addBook:function(){
              console.log(`New Book: ${this.book.title} : ${this.book.description}`);
              fetch(`${API_URL}/books/add`,{
                  method: "POST",
                  headers:{
                      "Content-Type" : "application/json"
                  },
                  body: JSON.stringify(this.book)
              })
              .then(res => 
              {
                  console.log(res.status)
                  if(res.status === 200){
                    console.log('Saved Successfully');
                    this.$router.push({name: 'All Books'});
                  }
              }).catch (error => {
                console.log(error);
              })
          }
          ,
          editBook: function(){
            console.log(`Update Book: ${this.book.title} : ${this.book.description}`);
              fetch(`${API_URL}/books/add`,{
                  method: "PUT",
                  headers:{
                      "Content-Type" : "application/json"
                  },
                  body: JSON.stringify(this.book)
              })
              .then(res => 
              {
                  console.log(res.status)
                //   if(res.status === 200)
                     // res.redirected('/books');
              }).catch (error => {
                console.log(error);
              })
          }
      }
  }
</script>
