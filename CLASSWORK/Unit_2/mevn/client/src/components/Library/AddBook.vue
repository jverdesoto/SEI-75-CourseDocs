<template>
    <h1>Add a Book</h1>
    <p><input v-model="book.title" type="text" placeholder="book title"><br></p>
    <p><input v-model="book.date" type="text" name="date" placeholder="book date"></p>
    <p><input v-model="book.author" type="text" placeholder="book author"><br></p>
    <p><button v-on:click="AddBook">Add a new book</button></p>
    <p><button><router-link :to="'/AllBooks'" >Show All Books</router-link></button></p>
    <p><button><router-link :to="'/'" >Home</router-link></button></p>
</template>

<script>
export default {
    name: 'BookAddNew',
    data: () => ({
        error: '',
        book: {
            title: '',
            date:'',
            author:''
        }
    }),
    methods: {
        AddBook: function () {
            console.log(`New book ${this.book.title} - ${this.book.date} - ${this.book.author}`);
            fetch('http://localhost:4000/AddBook', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.book.title,
                    date: this.book.date,
                    author: this.book.author
                })
            })
            .then(res => {
                console.log(res.status)
                this.book.title = ''
                this.book.date = ''
                this.book.author = ''
            })
        }
    }
}
</script>