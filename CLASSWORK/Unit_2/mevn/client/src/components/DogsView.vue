<template>
     <div id="container">
    <div v-for="dog in dogs" :key="dog._id">
       
        <div id="card">
        <h2>{{ dog.name }}</h2>
        <h3>I am {{ dog.age }} years old</h3>
        <p>I am a {{ dog.breed }}</p>
        <p><router-link :to="'/dogs/' + dog.id">View Dog</router-link></p>
    </div>
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
#container {
    display: flex;
    flex-wrap: wrap;
}
#card {
    height: 200px;
    width: 400px;
    border: 2px solid black;
    margin: 1vmin;
}
h3 {
    font-size: 20px;
}

</style>