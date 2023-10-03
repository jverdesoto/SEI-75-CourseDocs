<template>
    <h1>Hello Cat facts</h1>
    <button v-on:click="randmomFact">Click me!</button>
    <p id="fact"></p>
</template>

<script>

export default {
    name: 'CatFacts',
    data: () => ({
            error: '',
            facts: []
        }),

        mounted() {
            // fetch('https://cat-fact.herokuapp.com/facts')
            fetch('http://localhost:4000/cat-facts')
            .then(response => response.json())
            .then(result => {
                this.facts = result
            })
        },
        methods: {
            randmomFact: function () {
                const randomIndex = Math.floor(Math.random() * this.facts.length)
                document.getElementById('fact').innerText = this.facts[randomIndex].text
            }
        }
}
</script>