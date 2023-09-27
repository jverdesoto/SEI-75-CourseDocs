<template>
        <h1>Dogs</h1>
        <div class="container">
        <div v-for="dog in dogs" :key="dog.id">
            <h3>{{ dog.name }}</h3>
            <img :src="dog.img" alt="a dog" />
            <p>Hi, I'm {{ dog.name }}, I am {{ dog.age }} years old and I'm a {{ dog.breed }}</p>
            <p><router-link :to="'/dogs/' + dog.id" >View Dog</router-link></p>
        </div>
    </div>
</template>

<script>

//tell this view where it is going to get the info from 
//(we are passing a json file to this port that has all the info)
const API_URL = "http://localhost:4000/dogs"

//this view will export 
export default {
    name: 'dogsView',
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
    methods: {

    }
}
</script>

<style>
 .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
 }

 .container > h1{
    align-self: center;
 }

 .container > div{
    padding: 10px;
    background-color: #FAF3F0;
 }

 img{
    max-width: 40%;
 }
</style>