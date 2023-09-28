<template>
    <button @click="getRandomFact">View Fact</button>
    <h2>{{ fact.text }}</h2>
</template>

<script>

const API_URL = 'http://localhost:4000/cat-facts'
export default {
        name: 'FactButton',
        data: () => ({
            error: '',
            factArray: [],
            fact: ''
        }),

        mounted() {
            
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
               
                this.factArray = result
            })
        },
        methods: {
            getRandomFact() {
                let ranIdx = Math.floor(Math.random() * this.factArray.length)
                this.fact = this.factArray[ranIdx]
            }
        }
    }
</script>