<template>
    <div>
        <h1>Books By {{ author }}</h1>
        <div class="book-list">
            <div  v-for="book in authorbooks" :key="book.authorbooks" class="book-card"> 
                
                <h3>Title: {{ book.title }}</h3>
                <h3>Year Published: {{ book.publishingDate }}</h3>
            </div>
         </div>
     
    </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default  {   
    name: 'authorSingle',
    data: () => ({
        errors: '',
        authorbooks:[],
        author: ''
    }),
    mounted() {
        const route = useRoute()
        console.log(route.params)
        fetch(`http://localhost:4000/books/authordetails/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            this.authorbooks = result
            this.author = result[0].author
        })
    }
}


</script>

<style>
/* Center the content horizontally and add space around it */
.book-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  gap: 20px; /* Add space between cards */
}

.book-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
}

/* Additional styles for h1 and h3 elements if needed */
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h3 {
  font-size: 16px;
  margin: 5px 0;
}
</style>