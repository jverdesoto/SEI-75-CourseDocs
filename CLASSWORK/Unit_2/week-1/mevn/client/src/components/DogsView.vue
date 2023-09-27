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

div {
    margin-bottom: 16px;
}

#card > img {
    align-items: center;
    max-width: 100px;
    justify-content: center;
    margin-bottom: 50px;
    margin-left: 40%;
}

#card {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    flex-direction: column;
    border: 1px green solid;
    width: 50%;
    margin-left: 25%;
    padding-left: 10px;
    height: 255px;
    transition: .35s;
}

#card:hover{
    background-color: #FAF9F6;
    transform: scale(1.2);
}

#card > h3 {
    text-align: center;
}
#card > p {
    margin-top: 0px;
    max-width: 35%
}
</style>
