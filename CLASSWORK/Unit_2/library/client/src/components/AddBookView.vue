<template>
    <h1>Add New Book</h1>
    <p><input type="text" name="title" v-model="book.title" placeholder="Book Title"></p>
    <p><input type="text" name="description" v-model="book.description" placeholder="Book Description"></p>
    <p><input type="text" name="publishedDate" v-model="book.publishedDate" placeholder="01/01/2023"></p>
    <p><input type="text" name="author" v-model="book.authorName" placeholder="Jake"></p>
    <p><button v-on:click="addOrUpdate"> Save </button></p>
</template>
<script>
  const API_URL = 'http://localhost:4000'
  import { useRoute } from 'vue-router'
  export default {
    name: 'AddBookView',
    data: () => ({
          error: '',
          book: {
              bookId: '',
              title:'',
              description:'',
              publishedDate: new Date().toLocaleDateString(),
              authorName:'',
              authorId:''
          }
      }),

      mounted() {
        this.book.bookId = useRoute().params.id;
        if( this.book.bookId !== '-1')
        {
          console.log(`request author id : ${ this.book.bookId}`);
          fetch(`${API_URL}/books/${ this.book.bookId}`)
           .then(response => response.json())
           .then(result => {
              console.log(`update book : ${JSON.stringify(result)}`);
              this.book.title = result.title,
              this.book.description = result.description,
              this.book.publishedDate = new Date(result.publishedDate).toLocaleDateString()
              this.book.authorId = result.author
           })
           .then(() => {
                // retrive a book author
                fetch(`${API_URL}/authors/${this.book.authorId}`)
                .then(response => response.json())
                .then(result => {
                    this.book.authorName = result.name
                })  
           })
        }
      },
      methods: {
          addOrUpdate:function() {
              // case of edit book
              if( this.book.bookId !== '-1'){
                  this.editBook();
              }// case of add book
              else{
                this.addBook();
              }
          },
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
              fetch(`${API_URL}/books/${this.book.bookId}`,{
                  method: "PUT",
                  headers:{
                      "Content-Type" : "application/json"
                  },
                  body: JSON.stringify(this.book)
              })
              .then(res => 
              {
                  console.log(res.status)
                  if( this.book.bookId !== '-1'){
                    this.$router.replace({name: 'A Book'});
                  }else{
                    this.$router.replace({name: 'All Books'});
                  }
              }).catch (error => {
                console.log(error);
              })
          }
      }
  }
</script>
