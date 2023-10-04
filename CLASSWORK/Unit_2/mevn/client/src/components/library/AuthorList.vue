<template>
    <h1>Authors</h1>
    <h3>A list of authors</h3>
    <MainNav />
    <ul>
        <div v-for="author in authors" :key="author._id">
            <li><router-link :to="`/library/author/${author._id}`">{{ author.name }}</router-link></li>
        </div>
    </ul>
</template>

<script>
import MainNav from './Navigation'
const API_URL = `http://localhost:4000/author`
export default {
    name: 'AuthorList',
    data: () => ({
        error: '',
        authors: []
    }),
    mounted() {
        fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            this.authors = result
        })
    },
    components: {
        MainNav
    }
}
</script>