<template>
    <div>
        <button v-on:click="randomFact">GET ME A CAT FACT</button>
    </div>
    <p id="fact"></p>
</template>
<script>
    import { useRoute } from 'vue-router'
    const API_URL = 'https://cat-fact.herokuapp.com/facts'
    export default {
        name: 'CatFacts',
        el: '#app',
        data: () => ({
            error: '',
            cat: []
        }),

        mounted() {
            const route = useRoute()
            console.warn(route)
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.cat = result
            })
        },
        methods: { 
            randomFact: function() {
        let catArrayLength = this.cat.length
        let randomIndx = Math.floor(Math.random() * catArrayLength)
        let randomFactEl = document.getElementById('fact')
        let fact = this.cat[randomIndx].text
        randomFactEl.innerText = (`${fact}`)
    }
}
    }
</script>
