<template>
    <button v-on:click="randomCatFact">CAT FACT</button>
    <div>
        <p id="catFact"></p>
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    const API_URL = 'http://localhost:4000/cat-facts'


    export default {
        name: 'CatFactView',
        el: '#app',
        data: () => ({
            error: '',
            cat: {}
        }),
    mounted() {
            const route = useRoute()
            console.warn(route.params.id)
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
            this.cat = result
            })
        },
        methods: {
            randomCatFact: function() {
                let catArrayLength = this.cat.length
                let randomNumber = Math.floor(Math.random() * catArrayLength)
                document.getElementById('catFact').innerText = this.cat[randomNumber].text;
            }
        }
    }




</script>