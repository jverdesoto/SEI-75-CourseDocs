<template>
    <div>
        <div v-for="dog in dogs" :key="dog._id">
            <img :src="dog.img" alt="A dog">
            <h3>{{ dog.name }}</h3>
            <p>My dog's age is: {{ dog.age }}</p>
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
    h3 {
        font-size: 12px;
    }
    img {
        max-width: 200px;
        height: auto;
    }
</style>