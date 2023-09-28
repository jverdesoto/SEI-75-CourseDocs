<template> 
    <button v-on:click="randomCatFact">GET ME A CAT FACT</button>
    <div>
        <p id="catFactSpace" ref="catFactSpace"></p>
    </div>
</template>

<script>
    const API_URL = 'http://localhost:4000/cat-facts' 

    export default {
        name: 'CatFactButton',
        el: '#app',
        data: () => ({
            error: '',
            cat: []
        }),

        mounted() {
            fetch(API_URL) 
            .then(response => response.json())
            .then(result => {
                this.cat = result
            })
        },
        methods: {
            randomCatFact: function () {
                let catArrayLength = this.cat.length
                let randomNumber = Math.floor(Math.random() * catArrayLength)
                document.getElementById('catFactSpace').innerText = this.cat[randomNumber].text
            }
        }
    }

    

</script>