<template>
    <div>
        <div class="cards" v-for="dog in dogs" :key="dog._id">
            <h3>My dog's name is {{ dog.name }}...</h3>
            <p>He's {{ dog.age }} years old...</p>
            <p>And he's a {{ dog.breed }}</p>
            <img :src="dog.img" alt="a dog">
            <p><router-link :to="'/dogs/' + dog.id" >View Dog</router-link></p>
        </div>
    </div>
</template>

<script>
    const API_URL = 'http://localhost:4000/dogs'

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
        methods: {}
    }
</script>

<style>
    body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #dddfdc;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
    .cards {
    width: 250px;
    background-color: rgba(108, 216, 141, 0.4);
    border: 1px solid #089426;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

</style>