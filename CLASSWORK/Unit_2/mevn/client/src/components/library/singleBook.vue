<template>
    <div class="single-book-container">
        <h1>{{ book.title }}</h1>
        <h3> Author: <router-link :to="'/library/authors/' + book?.author?._id" class="router-link">{{ book?.author?.name }}</router-link></h3>
        <div class="button-container">
            <button @click="deleteBook">Delete this editBook</button>
            <button @click="goToEdit">Edit this entry</button>
        </div>
    </div>
   
</template>

<script>
import { useRoute } from 'vue-router';
const API_URL = 'http://localhost:4000/library/books'

export default {
    name: 'singleBook',
    data: () => ({
        error: 'no book to display',
        book: {},
        //need to change how the data is structured so it captures the authorId and it's name
    }),
    mounted() {
        try {
            const route = useRoute()
            fetch(`${API_URL}/${route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.book = result
                })
        }
        catch (error) {
            console.log('problems on the frontend', error)
        }
    },
    methods: {
        async deleteBook() {
            try {
                await fetch(`${API_URL}/${this.book._id}`, { method: 'DELETE' })
                this.status = "delete successful"
                console.log('delete successful')
                this.$router.replace({
                    name: 'allBooks'
                })
            } catch (error) {
                console.log('problems deleting the front', error)
            }
        },
        goToEdit() {
            this.$router.push({
                path: 'editBook/' + this.book._id
            })
        }
    }
}
</script>
<style scoped>
.single-book-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    gap: 5px;
}

.button-container {
    display: flex;
    gap: 10px;
    margin: 1%;
}

.router-link {
    text-decoration: none;
    color: inherit
}
.router-link:hover {
    color:orange;
}
</style>