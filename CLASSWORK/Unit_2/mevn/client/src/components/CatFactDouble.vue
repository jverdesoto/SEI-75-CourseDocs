<template>
    <img src="https://cataas.com/cat/gif" alt="">
    <h1>Cat Fact!</h1>
    <p>{{ catFact.text }}</p>
</template>

<script>
    const API_URL = "http://localhost:4000/cat-facts"

    export default {
        name: 'CatButton',
        data: () => ({
            error: '',
            catFact: {}
        }),
        // When the page is loaded - run this (mounted)
        mounted() {
            fetch(API_URL)
            .then(response => response.json())
            .then(result => this.catFact = result)
        },
        methods: {}
    }
</script>