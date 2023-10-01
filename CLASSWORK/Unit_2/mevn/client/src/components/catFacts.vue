<template>
    <div class="cat-facts-container">
    <button v-on:click="randomCatFact">give me a cat fact!</button>
    <p id="catFactParagraph" ref="catFactParagraph"></p>
</div>
</template>

<script>
//connect it to the router page
// import { useRoute } from 'vue-router'

//go and make it an element of the routes object

//go and get the info from the API
const API_URL = "http://localhost:4000/cat-facts"


//export it so you can grab it from other areas
export default {
    name: 'catFacts',
    //be able to 
    el: '#app',
    data: () => ({
        error: '',
        catFacts: []
    }),
    mounted() {
        //don't forget to useRoute() so you can grab from other areas of the app -> actually don't need it for this one
        // const route = useRoute()
        fetch(API_URL)
            .then(response => response.json())
            .then (result => {
                this.catFacts = result
            })
    }, 
    methods: {
        //creating a function that gets a random cat fact
        randomCatFact: function() {
            const randomNumber = Math.floor(Math.random() * this.catFacts.length)
            return this.$refs.catFactParagraph.innerText = this.catFacts[randomNumber].text
        },
    }
    
}
</script>

<style>
.cat-facts-container{
    display: flex;
    justify-content: center;
}

.cat-facts-container > button {
    width: 300px;
    height: 200px;
    text-align: center;
}
</style>