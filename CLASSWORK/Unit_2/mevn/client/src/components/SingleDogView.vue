<template>
    <div>
        <img :src="dog.img" alt="A dog">
        <h3>{{ dog.name }}</h3>
        <p>age:{{ dog.age }}</p>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
const API_URL = 'http://localhost:4000/dogs'

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
h3 {
    font-size: 12px;
}

img {
    max-width: 200px;
    height: auto;
}
</style>