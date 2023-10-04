<template>
    <div class="edit-book-container">
        <h1>Edit "{{ book.title }}" book details:</h1>
        <label for="editBookTitle">Book title:</label>
        <input type="text" v-model="book.title" name="editBookTitle" id="editBookTitle" placeholder="book.title">
        <label for="editBookAUthor">Author name:</label>
        <input type="text" v-model="book.author" name="editBookAuthor" id="editBookAuthor" placeholder="book.author.name">
        <label for="publishingDate">Publishing Year:</label>
        <input type="number" v-model="book.publishingDate" name="publishingDate" id="publishingDate" placeholder="book.publishingDate">
        <button @click="editBook">submit changes</button>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
    name: 'editBook',
    data: () => ({
        error: 'could not export data',
        book: {
            _id: '',
            title: '',
            author: '',   
            publishingDate: null,
        }
    }),
    mounted() {
        const route = useRoute()
        try {
            fetch(`http://localhost:4000/library/books/${route.params.id}`)
                .then(result => result.json())
                .then(data => {
                    this.book._id = route.params.id
                    this.book.title = data.title
                    this.book.author = data.author.name
                    this.book.publishingDate = data.publishingDate
                })
        } catch (error) {
            console.log('could not get data from another page', error)
        }
    },
    methods: {
        async editBook() {
            console.log(this.book)
            await fetch(`http://localhost:4000/library/books/${this.book._id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.book.title,
                    author: {
                        name: this.book.author.name
                    },
                    publishingDate: this.book.publishingDate
                })
            })

            this.$router.replace({ name: 'allBooks' })

        }
    }
}
</script>

<style scoped>
.edit-book-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    gap: 5px;
}

.edit-book-container > input {
    width: 50%
}
</style>