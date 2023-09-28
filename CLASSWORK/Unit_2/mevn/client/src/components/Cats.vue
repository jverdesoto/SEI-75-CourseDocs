<template>
    <div>
        <h1>This my Cat Page</h1>
        <button @click="handleClick">Random Cat Fact</button>
        <h3> {{ randomCatInfo }}</h3>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
const API_URL = 'https://cat-fact.herokuapp.com/facts'
export default {
    name: 'CatNode',
    data: () => ({
        error: '',
        cat: [],
        randomCatInfo: ''
    }),
    mounted() {
        const route = useRoute()
        console.warn(route)
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.cat = result
                console.log(result);
            })
    },
    methods: {
        handleClick(){
            const randomCat = Math.floor(Math.random() * this.cat.length)
            const randomCatFact = this.cat[randomCat].text
            this.randomCatInfo = randomCatFact
        }
    }
}
</script>