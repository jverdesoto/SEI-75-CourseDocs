<template>
    <h2> Here's a List of Books: Wow</h2>
    <section id = 'bookList'> 
        <ul>
            <div v-for="book in books" :key="book._id">
                <li> <RouterLink :to="'/library/book/' + book._id">{{ book.title }}</RouterLink> </li>
            </div>
        </ul>
    </section>
</template>

<script>
const API_URL = 'http://localhost:4000/library/book' // this should point to where the books data is hosted


export default { //exports the entire vue object to be used
        name: 'BookList', // name of hte bue component 
        data: () => ({
            error: '',
            books: [] // when the component is created, it's created with this empty array
        }),

        mounted() { // this is a vue thing that is called once is the vue object is mounted or loaded by the app
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.books = result // this basically populated the exporting data array with the value from the api 
            })
        },
        methods: {}
    }
</script>

<style>


</style>