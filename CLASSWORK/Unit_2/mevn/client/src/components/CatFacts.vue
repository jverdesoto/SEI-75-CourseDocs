<template>
    <h2>This is my cat page </h2>
    <button v-on:click="randomFact">click me</button>
    <p id="fact" ></p>
</template>
<script>
export default{
name:'CatFacts',
data: () => ({
            error: '',
            facts: []
        }),
       
        mounted() {
            // fetch('https://cat-fact.herokuapp.com/facts')
            fetch('https://localhost:4000/cat-facts')
            .then(response => response.json())
            .then(result => {
                this.facts = result
            })
        },
        methods: {
            randomFact : function (){
                const randomIndex = Math.floor(Math.random()*this.facts.length)
                document.getElementById('fact').innerText = this.facts[randomIndex].text
                console.log(randomIndex);
            }
        }
}
</script>