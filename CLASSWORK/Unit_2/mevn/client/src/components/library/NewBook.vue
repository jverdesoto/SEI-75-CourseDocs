<template>
    <h1>New Book</h1>
    <h3>Add a new book</h3>
    <MainNav />
    <div class="bookForm">
        <label for="title">Title:</label>
        <input type="text" name="title" placeholder="Title" v-model="book.title">
        <label for="author">Author:</label>
        <input type="text" name="author" placeholder="Author" v-model="book.author">
        <label for="publishDate">Publishing Year:</label>
        <input type="number" min="1200" name="publishDate" placeholder="Publishing Date" v-model="book.publishDate">
        <button @click="addBook">Add</button>
    </div>
</template>
<script>
import MainNav from './Navigation'
export default {
    name: 'NewBook',
    data: () => ({
        book: {
            title: '',
            author: '',
            publishDate: ''
        }
    }),
    components: {
        MainNav
    },
    methods: {
        addBook: function () {
            fetch('http://localhost:4000/book/new', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.book.title,
                    author: this.book.author,
                    publishDate: this.book.publishDate
                })
            })
            .then(res => {
                console.log(res.status)
                this.book.title = '',
                this.book.author = '',
                this.book.publishDate = ''
            })
        }
    }
}
</script>

<style>
button {
    cursor: pointer;
}
.bookForm {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    margin: 30px auto;
    width: 50vw;
}
</style>