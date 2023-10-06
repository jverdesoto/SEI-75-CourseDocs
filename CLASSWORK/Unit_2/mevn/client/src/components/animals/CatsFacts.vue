<template>
    <h1>Hello Cat facts</h1>
    <!-- <button v-on:click="randomFact">Click me!</button> -->
    <!-- <p id="fact"></p> -->
</template>

<script>
import { response } from 'express';

export default {
    name: 'CatFacts',
    data: () => ({
        error: '',
        facts: []
    }),

    mounted() {
        fetch('https://cat-fact.herokuapp.com/facts')
        .then(repsonse => response.json())
        .then(result => {
            this.facts = result
        })
    },
        
    methods: {
        randomFact: function () {
            const randomIndex = Math.floor(Math.random() * this.facts.length)
            document.getElementById('fact').innerText = this.facts[randomIndex].text
        }
    }
}
</script>