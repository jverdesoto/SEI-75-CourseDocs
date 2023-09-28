<template>
        <h3>Cat Facts</h3>
        <button v-on:click="randomFact">Random Cat Fact!</button>
        <p id="fact"></p>
        <!-- <div v-for="fact in facts" :key="fact._id">
            <p>{{ fact.text }}</p>
        </div> -->
</template>

<script>
export default { // the name of your component
    name: 'CatFacts',
    data: () => ({ // any data you might need to use from you js function into your front end
            error: '',
            facts: [] // empty array to be filled in with data from API. NB it's a variabe in an object, so acts as a key (i.e. doesn't neet a let or const)
        }),

//mounted is a method that will run anything inside of curly braces the moment this compontent 
//is mounted on the page
        mounted() {
            // fetch the URL with 'fetch'
            // fetch('https://cat-fact.herokuapp.com/facts')
            fetch('http://localhost:4000/cat-facts')
            //the 'then' says wait for the previous action to finish, THEN move onto the next one
            .then(response => response.json()) //put the API in a variable response, then put it into a json format
            .then(result => {  // this puts all the data from the API into the 'facts' array
                this.facts = result
            })
        },
        methods: { //methods are just functions that live inside something 
            randomFact: function () {
                const randomIndex = Math.floor(Math.random() * this.facts.length)
                document.getElementById('fact').innerText = this.facts[randomIndex].text
                console.log(randomIndex);
            }
        } 
    }

</script>

<style>
h3 {
    font-size:xx-large;
}
</style>