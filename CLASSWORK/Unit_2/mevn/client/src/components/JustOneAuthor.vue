<template> 
    <h1> {{author.name}} </h1>
    <p>Here are the books written by {{ author.name }}</p>
    <ul>
        <div id="listOfAuthorsBooks" v-for="book in books" :key="book._id">
            <li> {{ book.title }} </li>
        </div>
    </ul>
</template>


<script>
import { useRoute } from 'vue-router'
    const API_URL = 'http://localhost:4000/library/author'

export default { //exports the entire vue object to be used
    name: 'JustOneAuthor', // name of hte bue component 
    data: () => ({
        error: '',
        books: [],
        author: ''
    }),

    mounted() { // this is a vue thing that is called once is the vue object is mounted or loaded by the app
        const route = useRoute()
        console.warn(route.params)
        fetch(`${API_URL}/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            this.books = result.authorsBooks
            this.author = result.authorData // this basically populated the exporting data array with the value from the api 
        })
    },
    methods: {}
}
</script>