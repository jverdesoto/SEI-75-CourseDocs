<template>
   <h1> Cat Facts </h1>
   <div class="card" v-bind="fact" :key="fact._id">
        <div background-color>{{fact.text}}</div>
   </div>
    
</template>

<script>
   const API_URL = 'https://cat-fact.herokuapp.com/facts'

    export default {
        name: 'FactView',
        data: () => ({
            error: '',
            fact:{}
        }),

        mounted() {
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                let randomNumber =Math.floor(Math.random() * result.length);
                this.fact = result[randomNumber];
            })
        },
        methods: {}
    }
</script>
<style>

.card{
    border: 1px solid blue;
    border-radius: 4px;
    display: flex;
    gap: 2px;
    margin: 10px;
    color: darkblue;
}

</style>