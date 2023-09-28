<template>
    <div>
        <h1>Doge Details</h1>
     
        <div class="card" v-bind="dog" :key="dog._id">
            <img :src="dog.img" alt="A dog">
            <div class="row">
                <div>Name: </div>
                <div>{{ dog.name }} </div>
            </div>
            <div class="row">
                <div>Age: </div>
                <div>{{ dog.age }} </div>
            </div>
            <div class="row">
                <div>Breed: </div>
                <div>{{ dog.breed }} </div>
            </div>
        </div>
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
            // console.warn(route.params.id)
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


