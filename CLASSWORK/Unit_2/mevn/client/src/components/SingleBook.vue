<template>
    <h1 id="authorOrBookName">{{ book?.title }}</h1>
    <p id="bookDetails"><router-link :to= "'/library/search-by-author/'+book?.author?._id"> Author: {{ book?.author?.name }}</router-link></p>
    <p id="bookDetails">Year of publish: {{ book?.year }}</p>
</template>

<script>
    import { useRoute } from 'vue-router'
    const API_URL = "http://localhost:4000/books"
    export default {
        name: 'SingleBook',
        data: () => ({
            error: '',
            book: {},
        }),
        mounted() {
            const route = useRoute()
            console.warn(route.params.id)
            fetch(`${API_URL}/${route.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.book = result
            })
        },
        methods: {}
    }    
</script>