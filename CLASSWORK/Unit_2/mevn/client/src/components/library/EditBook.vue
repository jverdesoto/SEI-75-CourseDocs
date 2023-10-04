<template>
    <h1>Edit Book</h1>
    <h3>Edit a book</h3>
    <MainNav />
    <div class="bookForm">
        <label for="title">Title:</label>
        <input type="text" name="title" placeholder="Title" v-model="book.title">
        <label for="author">Author:</label>
        <input type="text" name="author" placeholder="Author" v-model="book.author" disabled>
        <label for="publishDate">Publishing Year:</label>
        <input type="number" min="1200" name="publishDate" placeholder="Publishing Date" v-model="book.publishDate">
        <button @click="editBook">Save</button>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
import MainNav from './Navigation'
export default {
    name: 'EditBook',
    data: () => ({
        book: {
            id: '',
            title: '',
            author: '',
            publishDate: ''
        }
    }),
    components: {
        MainNav
    },
    mounted () {
        const route = useRoute()
        fetch(`http://localhost:4000/book/${route.params.id}`)
        .then(result => result.json())
        .then(data => {
            this.book.id = route.params.id
            this.book.title = data.title
            this.book.author = data.author.name
            this.book.publishDate = data.publishDate
        })
    },
    methods: {
        editBook: function () {
            fetch(`http://localhost:4000/book/${this.book.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.book.title,
                    publishDate: this.book.publishDate
                })
            })
            .then(() => {
                this.$router.replace({ path: `/library/book/${this.book.id}` })
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