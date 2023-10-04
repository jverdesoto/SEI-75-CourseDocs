<template>

<div class="page-container">
    <h1 class="page-title">List of Authors</h1>
    <div class="author-list">
      <router-link
        v-for="author in authors"
        :to="'/books/authordetails/' + author"
        :key="author"
        class="author-item"
      >
        <p>{{ author }}</p>
      </router-link>
    </div>
  </div>
</template> 

<script>

export default  {   
    name: 'AuthorList',
    data: () => ({
        errors: '',
        authors: []
    }),
    mounted() {
        fetch('http://localhost:4000/books/authorsearch')
        .then(response => response.json())
        .then(result => {
            this.authors = result
        })
    }
}


</script>

<style>
.page-container {
  text-align: center;
  padding: 20px;
}

.page-title {
  font-size: 36px;
  margin-bottom: 20px;
}

.author-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /* Set flex-direction to column */
  align-items: center; /* Center align items horizontally */
}

.author-item {
text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the text color */
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  background-color: #f0f0f0; /* Background color for the card */
  transition: box-shadow 0.3s, transform 0.3s;
}


.author-item:hover {
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
  background-color: #f0f0f0; /* Hover color (same as background color) */
}
</style>