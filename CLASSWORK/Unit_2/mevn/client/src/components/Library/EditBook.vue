<template>
    <h1>Edit a Book</h1>
    <p><input v-model="book.title" type="text" placeholder="book title"><br></p>
    <p><input v-model="book.date" type="text" name="date" placeholder="book date"></p>
    <p><input disabled v-model="author.name" type="text" placeholder="book author"><br></p>
    <p><button v-on:click="editBook">Update book</button></p>
    <p><button><router-link :to="'/AllBooks'" >Show All Books</router-link></button></p>
    <p><button><router-link :to="'/'" >Home</router-link></button></p>
</template>
<script>
import { useRoute } from 'vue-router'
export default {
    name: 'BookAddNew',
    data: () => ({
        error: '',
        book: {},
        author: {},
        id: ''
    }),
    mounted() {
        const route = useRoute()
        fetch(`http://localhost:4000/Book/${route.params.id}`)
            .then((response) => response.json())
            .then((result) => {
                this.book = result.book
                this.author = result.author
                this.id = route.params.id
                console.log(this.author);
                
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {
        editBook: function () {
            console.log('EDIT BOOK Function');
            fetch(`http://localhost:4000/EditBook/${this.book._id}`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.book.title,
                    date: this.book.date
                })
            })
                .then(() => {
                    this.$router.replace({ path: `/AllBooks` })
                })
                .catch((error) => {
                    console.error("Error editing book:", error);
                });
        }
    }
}
</script>




