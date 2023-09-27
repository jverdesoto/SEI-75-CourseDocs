<template>
    <header>
        <h1>{{ dog.name }}</h1>
    </header>
    <div class="container">
        <div class="image">
            <img :src="dog.img" alt="">
        </div>
        <div class="information">
            <p>{{ dog.name }} is {{ dog.age }} years old</p>
            <p><span>Breed:</span> {{ dog.breed }}</p>
            <p>{{ dog.details }}</p>
        </div>
        <div class="left">
            <font-awesome-icon :icon="['fas', 'angle-left']" />
        </div>
        <div class="right">
            <font-awesome-icon :icon="['fas', 'angle-right']" />
        </div>
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    const API_URL = "http://localhost:4000/dogs"

    export default {
        name: 'SingleDogView',
        data: () => ({
            error: '',
            dog: {}
        }),
        // When the page is loaded - run this (mounted)
        mounted() {
            // useRoute() is a Vue method which gets data from other areas of the application
            const route = useRoute()
            // Fetch = JS method that will get a URL and respond with something
            // Because it takes time to make the request and get the requested data
            fetch(`${API_URL}/${route.params.id}`)
            // Then makes the function synchronous - 
            // it waits for the promise to be fulfilled (in this case fetch) before running the code
            // Gets data and puts it into a JSON format
            .then(response => response.json())
            // Waits until the data is in JSON, then store it in the object
            .then(result => {
                this.dog = result
            })
        },
        methods: {}
    }
</script>

<style>
    header {
        width: 100%;
        height: 14vmin;
        background-color: royalblue;
        color: antiquewhite;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        filter: drop-shadow(0 0.01vmin 2vmin black);
    }

    h1 {
        font-size: 6vmin;
    }

    .container {
        display: flex;
        flex-flow: row wrap;
    }

    .image img {
        width: 100%;
        border-radius: 0 0 25% 0;
    }

    .container > div {
        width: 50%;
        box-sizing: border-box;
    }

    .information {
        padding: 3vmin;
        text-align: left;
        font-size: 2.2vmin;
    }

    .left, .right {
        font-size: 5vmin;
        padding: 0 3vmin;
    }

    .left {
        text-align: left;
    }

    .right {
        text-align: right;
    }
</style>