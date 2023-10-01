<template>
    <div>
        <h1>CAT FACT GENERATOR</h1>
        <button v-on:click="randomFact">Click Me!</button>
        <p id="fact"></p>
    </div>
</template>

<script>
    // const API_URL = 'https://cat-fact.herokuapp.com/facts'

    // Define a new component named 'CatFacts'.
export default {
    // Name the component 'CatFacts'. This does not have to be the same name as the file name
    //in fact we could call this MyCatFactsComponents
    //we are building a toy and were gonna give it the name of catFacts
    name: 'myCatFactsPage',  //'CatFacts' was named before but change cause it got confusing

    // Set up the initial data for this component.
    //the toy needs some things so we can play  with it
    data: () => ({
        error: '', // A box where we can put any mistakes messages. Create a variable 'error' to store any error messages.
        facts: []   // An empty bag called facts where we can collect facts about cats. Its empty but we will fill it later. Create an empty array 'facts' to store cat facts.
    }),

    // This is a special function that runs when the component is mounted (added to the web page).
    //When we bring our toy out to play (put it on a table), we want it to do something. This is like saying, "When our toy is ready to play, do these things."
    mounted() {
        // Send a request to the server at http://localhost:4000/CatFacts to get cat facts.
        //Imagine our toy wants to learn about cats. So, it sends a message to a special place on the internet (the server) and asks for information about cats.
        fetch('http://localhost:4000/CatFacts')
            // The server sends back a message with cat facts, but it's like a puzzle. 
            //We need to put the puzzle pieces together to understand it. That's what "parse" means here.
            //Parse the response as JSON or get the json out of the response
            .then(response => response.json()) 
            .then(result => {
                //Once we solve the puzzle, we have some cat facts! We put these facts in our empty bag called 'facts' so we can use them later.
                // When the response is received, store the cat facts in the 'facts' variable.
                this.facts = result;
            });
    },

    // Define methods (functions) that can be used by this component.
    //Sometimes our toy needs to do special actions. We can tell it how to do these actions.
    methods: {
        // This method displays a random cat fact.
        //Our toy can do a trick! It can show us a random cat fact. It's like a magic trick
        randomFact: function() {
            // Generate a random index to select a random cat fact from the 'facts' array.
            const randomIndex = Math.floor(Math.random() * this.facts.length);
            
            // Update the content of the HTML element with the id 'fact' with a random cat fact.
            document.getElementById('fact').innerText = this.facts[randomIndex].text;

            // Log the randomIndex to the console for debugging.
            console.log(randomIndex);
        }
    }
}

</script>