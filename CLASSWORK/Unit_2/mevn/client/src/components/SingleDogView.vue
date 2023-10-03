<template>
    <div>
        <img :src="dog.img" alt="A dog">
        <h3>{{ dog.name }}</h3>
        <p>age: {{ dog.age }}</p>
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

        mounted() {
            const route = useRoute()
            fetch(`${API_URL}/${route.params.id}`)
            .then(response => response.json())
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