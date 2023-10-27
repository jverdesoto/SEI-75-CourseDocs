<template>
    <div>
        <img :src="dog.img" alt="A dog">
        <h3>{{ dog.name }}</h3>
        <p>Breed: {{ dog.breed }}</p>
        <p>My dog's age is: {{ dog.age }}</p>
        <p id="factText"></p>
        <button id=fact class="fact">Press for random dog fact</button>
    </div>

</template>

<script>
import { useRoute } from 'vue-router'
const API_URL = 'http://localhost:4002/dogs'

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
// const factText = document.getElementById('factText')
// const dogFact = document.getElementById('fact')
// dogFact.addEventListener('click',() => {
//     // factText.innerHTML(`${}`)
// })
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














