<template>
    <img src="https://cataas.com/cat/gif" alt="">
    <h1>Cat Fact!</h1>
    <p>{{ catFact.text }}</p>
</template>

<script>
    const API_URL = "https://cat-fact.herokuapp.com/facts"

    export default {
        name: 'CatButton',
        data: () => ({
            error: '',
            catFact: {}
        }),

        mounted() {
            fetch(API_URL)
            .then(response => response.json())
            .then(allFacts => allFacts[Math.floor(Math.random() * allFacts.length)])
            .then(result => this.catFact = result)
        },
        methods: {}
    }
</script>