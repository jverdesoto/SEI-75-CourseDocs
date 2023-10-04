<template>
    <div>
        <!-- <p><a :href="'/dogs/' + dog.id">View Dog</a></p> -->
        <h1 class="page-title">Books By Title</h1>
        <div class="book-list" v-for="t in titles" :key="t._id">
            
                <router-link :to=" '/books/titledetails/' + t._id" class="book-card" :key="t._id">
                <h3>{{ t.title }}</h3>
                <!-- <h3><a :href="'/books/titlesearch' + t._id">{{ t.title }}</a></h3> -->
                </router-link>
       
            <!-- <div><h3>{{ t.title }}</h3></div> -->
        </div> 
    </div>
</template>

<script>

export default  {   
    name: 'TitleList',
    data: () => ({
        errors: '',
        titles: []
    }),
    mounted() {
        fetch('http://localhost:4000/books/titlesearch')
        .then(response => response.json())
        .then(result => {
            this.titles = result
        })
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

.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.book-card {
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

.book-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
  background-color: #f0f0f0; /* Hover color (same as background color) */
}

h3 {
  font-size: 16px;
  margin: 5px 0;
}
</style>





