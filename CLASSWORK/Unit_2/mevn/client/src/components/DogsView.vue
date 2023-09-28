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

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.dog-card {
    flex: 1 0 calc(33.333% - 16px);
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 32px 0;
    border-radius: 8px;
}

h3 {
    margin-top: 0; 
}

img {
    width: 300px;
}
</style>
