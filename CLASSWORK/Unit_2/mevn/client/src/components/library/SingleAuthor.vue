<template>
    <h1>Books</h1>
    <h3>A list of Books</h3>
    <MainNav />
    <div v-if="data.author">
        <h2>{{ data.author.name }}</h2>
        <h3>Books by this author:</h3>
        <ul>
            <div v-for="book in data.books" :key="book._id">
                <li><router-link :to="`/library/book/${book._id}`">{{ book.title }}</router-link></li>
            </div>
        </ul>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import MainNav from './Navigation'
const API_URL = `http://localhost:4000/author`

export default {
    name: 'SingleAuthor',
    data: () => ({
        error: '',
        data: {}
    }),
    mounted() {
        const route = useRoute()
        fetch(`${API_URL}/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            this.data = result
        })
    },
    components: {
        MainNav
    }
}
</script>