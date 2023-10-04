<template>
    <h1>Add a Book</h1>
    <!-- <div v-for="b in book" :key="b._id"> -->
    <p><input v-model="book.title" type="text" placeholder="book title"><br></p>
    <p><input v-model="book.date" type="text" name="date" placeholder="book date"></p>
    <p><input v-model="book.author" type="text" placeholder="book author" disabled><br></p>
    <p><button v-on:click="editBook">Update new book</button></p>
    <p><button><router-link :to="'/AllBooks'" >Show All Books</router-link></button></p>
    <p><button><router-link :to="'/'" >Home</router-link></button></p>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: 'EditBook',
    data: () => ({
        error: '',
        book: {
            author: '',
            title: '',
            date: '',
            id: ''
        }
    }),
    mounted() {
        const route = useRoute()
        fetch(`http://localhost:4000/AllBooks/${route.params.id}`)
            .then((response) => response.json())
            .then((result) => {
                this.book = result
                console.log(result);
                this.book.title = result.book.title;
                this.book.date = result.book.date
                this.book.author = result.author.name
                this.book.id = route.params.id
                // console.log(this.book);
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {
        editBook: function () {
            fetch(`http://localhost:4000/AllBooks/${this.book.id}`, {
                method: "PUT", // Use PUT method to update the book
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
        }
    }
}
</script>