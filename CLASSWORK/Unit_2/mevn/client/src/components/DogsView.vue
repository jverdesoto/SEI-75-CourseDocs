<template>
    <div>
        <div v-for="dog in dogs" :key="dog._id">
            <img :src="dog.img" alt="A dog">
            <h3>{{ dog.name }}</h3>
            <p>My dog's age is: {{ dog.age }}</p>
            <p><router-link :to="'/dogs/' + dog.id" >View Dog</router-link></p>
        </div>
    </div>
</template>

<script>
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
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

/* Style for each card */
.cards {
    width: 250px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3{
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0; 
    text-decoration: underline;
    }




</style>