<template>
    <h1>Came here for dogs?</h1>
    <div class="all-container">
        <div v-for="dog in dogs" :key="dog._id">
            <img :src="dog.img" alt="">
            <h3>{{ dog.name }}</h3>
            <p>{{ dog.name }} is {{ dog.age }} years old</p>
            <p><span>Breed:</span> {{ dog.breed }}</p>
            <p><router-link :to="'/dogs/' + dog.id" >View Dog</router-link></p>
        </div>
    </div>
</template>

<script>
    const API_URL = "http://localhost:4000/dogs"

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
    .all-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: space-around;
        gap: 3vmin;
    }

    .all-container div {
        width: 25vmin;
        border: solid grey 1px;
        border-radius: 5%;
        filter: drop-shadow(-0.5vmin 0.5vmin 2px gray);
        background-color: white;
    }

    .all-container > div img {
        width: 100%;
        height: 20vmin;
        border-radius: 5% 5% 0 0;
        object-fit: cover;
    }

    .all-container span {
        font-weight: bold;
    }
</style>