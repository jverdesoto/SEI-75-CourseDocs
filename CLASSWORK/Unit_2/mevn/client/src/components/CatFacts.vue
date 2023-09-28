<template>
    <div>
        <h1>CAT FACT GENERATOR</h1>
        <button v-on:click="randomFact">Click Me!</button>
        <p id="fact"></p>
    </div>
</template>

<script>
    // const API_URL = 'https://cat-fact.herokuapp.com/facts'

    export default {
        name: 'CatFacts',
        data: () => ({
            error: '',
            facts: []
        }),

        mounted() {
           // fetch('https://cat-fact.herokuapp.com/facts')
           fetch('http://localhost:4000/CatFacts')
            .then(response => response.json())
            .then(result => {
                this.facts = result
            })
        },
        methods: {
            randomFact: function(){
                const randomIndex = Math.floor(Math.random()* this.facts.length)
                document.getElementById('fact').innerText = this.facts[randomIndex].text
                console.log(randomIndex)
            }
        }
    }

</script>