<template>
    <main>
        <div class="single-dog-container">
        <h2>Cute Doggo number {{ dog.id }}</h2>
        <h1>{{ dog.name }}</h1>
       
            <img :src="dog.img" alt="a dog" />
            <p>Hi, I'm {{ dog.name }}, I am {{ dog.age }} years old and I'm a {{ dog.breed }}</p>
        </div>
    </main>
</template>

<script>

//tell this view where it is going to get the info from 
import { useRoute } from 'vue-router'

const API_URL = "http://localhost:4000/dogs"

//this view will export 
export default {
    name: 'singleDogView',
    data: () => ({
        error: '',
        dog: {}
    }),

    mounted() {
        
        const route = useRoute()// useRoute() is a Vue method which gets data from other areas of the application
        
        // console.warn(route.params.id)
        fetch(`${API_URL}/${route.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.dog = result
            })
    },
    methods: {
    }
}
</script>

<!-- <style scoped>
.single-dog-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 80vh;
    width: 50vw;
    background-color: rgb(124, 230, 195);
    border-radius: 20px;
}

.single-dog-container > img{
    max-width: 40%;
    border-radius: 10px;
}

.single-dog-container > p {
    padding: 10px;
    margin-top: 5%;
}
</style> -->