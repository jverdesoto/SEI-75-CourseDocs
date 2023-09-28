<template>
    <h1>Hello Cat Lovers</h1>
    <button v-on:click="getRandomFact">Fetch Random Cat Fact</button>  

    <p id="fact"></p>
    
</template>

<script>

export default {
    name: 'CatFact',
    data: () => ({
        error: '',
        cats: []
    }),

    mounted() {
        //fetch('https://cat-fact.herokuapp.com/facts')
        fetch('http://localhost:4000/cat-facts')
            .then(response => response.json())
            .then(result => {
                this.cats = result
            })
    },
    methods: {
        getRandomFact: function () {
            const randomNumber = Math.floor(Math.random() * this.cats.length) 
            document.getElementById("fact").innerText = this.cats[randomNumber].text
        }
    }
}


</script>

<style>
h3 {
    font-size: 12px;
}

img {
    max-width: 200px;
    height: auto;
}
button {
    box-shadow: 2px black;
}
</style>