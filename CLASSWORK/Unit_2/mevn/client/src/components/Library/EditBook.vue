<template>
    <h1>Add a Book</h1>
    <div v-for="b in book" :key="b._id">
    <p><input v-model="b.title" type="text" placeholder="book title"><br></p>
    <p><input v-model="b.date" type="text" name="date" placeholder="book date"></p>
    <p><input v-model="b.name" type="text" placeholder="book author"><br></p>
</div>
    <p><button v-on:click="editBook">Update new book</button></p>
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
        id: ''
    }),
    mounted() {
        const route = useRoute()
        fetch(`http://localhost:4000/AllBooks/${route.params.id}`)
            .then((response) => response.json())
            .then((result) => {
                this.book = result
                console.log(result);
                this.id = route.params.id
                console.log(this.book);
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
                .catch((error) => {
                    console.error("Error editing book:", error);
                });
        }
    }
}
</script>