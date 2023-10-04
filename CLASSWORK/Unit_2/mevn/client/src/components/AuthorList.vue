<template>
    <h2> Here's a List of Authors: Wowee</h2>
    <section id = 'authorList'> 
        <ul>
            <li v-for="author in authors" :key="author._id"> <RouterLink :to="'/library/author/' + author._id">{{ author.name }}</RouterLink> </li>
        </ul>
    </section>
</template>

<script>
const API_URL = 'http://localhost:4000/library/author' // this should point to where the author data is hosted, i.e. my node backend server, not Mongo


export default { //exports the entire vue object to be used
        name: 'AuthorList', // name of hte bue component 
        data: () => ({
            error: '',
            authors: [] // when the component is created, it's created with this empty array
            
        }),
        
        mounted() { // this is a vue thing that is called once is the vue object is mounted or loaded by the app
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.authors = result
                console.log(result) // this basically populated the exporting data array with the value from the api 
            })
        },
        methods: {}
    }
</script>

<style>


</style>