<template>
    <div class="listView">
        <div class="card" v-for="dog in dogs" :key="dog._id">
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
                <div>{{ dog.name }} </div>
            </div>
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
.listView{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2px;
}

.card{
    border: 1px solid aqua;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 10px;
}

.row{
    background-color: transparent;
    display: flex;
    gap: 2px;
}
</style>