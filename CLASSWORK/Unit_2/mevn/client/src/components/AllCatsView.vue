<template>
    <button><router-link :to="'/cats/'" >Refresh</router-link></button>
    <button><router-link :to="'/add/cat/'" >Add Cat</router-link></button>
    <div class="listView">
        <div class="card" v-for="cat in cats" :key="cat._id">
            <div class="row">
                <div>Name: </div>
                <div>{{ cat.name }} </div>
            </div>
            <div class="row">
                <div>Age: </div>
                <div>{{ cat.age }} </div>
            </div>
        </div>
    </div>
</template>

<script>
   const API_URL = 'http://localhost:4000/cats'

export default {
    name: 'AllCatsView',
    data: () => ({
        error: '',
        cats: []
    }),

    mounted() {
        fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            this.cats = result
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