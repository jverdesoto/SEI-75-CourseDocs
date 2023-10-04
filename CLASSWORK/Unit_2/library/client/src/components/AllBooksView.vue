<template>
     <h1>All books</h1>
    <div class="listView">
        <div class="card" v-for="book in books" :key="book._id">
            <h2><router-link :to="'/books/' + book._id" >  {{ book.title }} </router-link></h2>
        </div>
    </div>
</template>

<script>
   const API_URL = 'http://localhost:4000'

    export default {
        name: 'AllBooksView',
        data: () => ({
            error: '',
            books: []
        }),

        mounted() {
            fetch(`${API_URL}/books`)
            .then(response => response.json())
            .then(result => {
                this.books = result
            })
        },
        methods: {}
    }
</script>

<style>
.listView{
    /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.card{
    border: 1px solid green;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 10px;
}

.row{
    background-color: transparent;
    display: flex;
    gap: 2px;
}
</style>