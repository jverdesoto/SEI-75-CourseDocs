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
        // When the page is loaded - run this (mounted)
        mounted() {
            // Fetch = JS method that will get a URL and respond with something
            // Because it takes time to make the request and get the requested data
            fetch(API_URL)
            // Then makes the function synchronous - 
            // it waits for the promise to be fulfilled (in this case fetch) before running the code
            // Gets data and puts it into a JSON format
            .then(response => response.json())
            // Randomly select a fact
            .then(allFacts => allFacts[Math.floor(Math.random() * allFacts.length)])
            // Waits until the data is in JSON, then store it in the objec
            .then(result => this.catFact = result)
        },
        methods: {}
    }
</script>