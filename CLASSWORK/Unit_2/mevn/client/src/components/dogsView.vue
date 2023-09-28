<template>
    <div>
        <div class="dog-card" v-for="dog in dogs" :key="dog._id">
            <div class="title">
             <h3>{{ dog.name }}</h3>
            </div>
            <div class="dog-details">
                <img :src="dog.img" alt="a cute dog">
                <div class="dog-text">
                    <p>My dog's age is: {{ dog.age }}</p>
                    <p>My dog's breed is: {{ dog.breed }}</p>
                    <p><a :href="'/dogs/' + dog.id">View Dog</a></p>
                </div>
            </div>
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
    .dog-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin:  10px auto;
        width: 600px;
        border: 1px solid black;
    }   
    .title {
        font-size: 20px;
        border-bottom: 2px solid darkgreen;
    }
    .dog-details {
        height: 150px;
        display: flex;
        justify-content: flex-start;
    }
    img {
        border: 2px solid darkgreen;
        width: 200px;
    }
    .dog.text {
        display: flex;
        align-items: center;
    }
    p {
        display: flex;   
        padding-left: 10px;
       
    }
    
</style>