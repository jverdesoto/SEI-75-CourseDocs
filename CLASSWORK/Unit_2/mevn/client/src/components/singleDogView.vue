<template>
    <main>
        <h2>Dog of the Week</h2>
        <h1>{{ dog.name }}</h1>
        <div class="container">
            <img :src="dog.img" alt="a dog" />
            <p>Hi, I'm {{ dog.name }}, I am {{ dog.age }} years old and I'm a {{ dog.breed }}</p>
        </div>
    </main>
</template>

<script>
//tell this view where it is going to get the info from 
//(we are passing a json file to this port that has all the info)
const API_URL = "http://localhost:4000/dogs/5"

//this view will export 
export default {
    name: 'singleDogView',
    data: () => ({
        error: '',
        dog: {}
    }),

    mounted() {
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.dog = result
            })
    },
    methods: {
    }
}
</script>

<style>
main {
    display: flex;
    flex-direction: column;
    background-color: #78D6C6;

}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    border-radius: 20px;
}

p {
    padding: 2vmin;
}
</style>