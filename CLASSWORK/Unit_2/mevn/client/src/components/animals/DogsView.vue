<template>
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Croissant+One&display=swap" rel="stylesheet">
      <div>
            <div class="card">
                    <!-- <div v-for="dog in dogs" :key="dog._id" class="dog-card"> -->
                        <!-- <img src="../assets/doggo.png" alt="Image of Good boy/girl"> -->
                        <h3>{{ dog.name }}</h3>
                        <p>Age: {{ dog.age }}</p>
                        <p>Breed: {{ dog.breed }}</p>
                        <p><router-link :to="'/dogs/' + dog.id" >View Dog</router-link></p>
                    <!-- </div>  -->
            </div>
      </div>
    </div>
  </template>
  

<script>

// import {useRoute} from 'vue-router'

const API_URL = 'http://localhost:4000/dogs'

export default {
    name: 'DogsView',
    data: () => ({
        error: '',
        dogs: []
    }),

    mounted() {
        fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            this.dogs = result
        })
    },
methods: {}
}
</script>

<style>

.card {
    display: flex;
    flex-wrap: wrap;
}

h3 {
    font-size: 30px;
}
.dog-card {
    font-family: 'Croissant One', cursive;
    background-color: #e6ccff;
    border: 2px solid #9370DB;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}

.dog-card h3 {
  font-size: 30px;
}

.dog-card p {
  font-size: 16px;
}

img {
    max-width: 200px;
    height: auto;
}

</style>


<!-- your front end should fetch data directly for the api. node ennvironment should fetch from api and front end fetch from node. -->
<!-- in client, create a route that reads a components (the cat file?) -->
<!-- inside component make a folder called cats.vue and create a template
fetch data from that api -->
<!-- client fetches directly form the api. vue component should fetch from cat facts api and then do something with the data. -->