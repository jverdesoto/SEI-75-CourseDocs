<template>
    <div class="single-book-container" v-if="book">
      <h1>{{ book.title }}</h1>
      <p> Author: {{ book?.author?.name }}</p>
      <p> Publishing year: {{ book.publishingDate }}</p>
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
        // author:{}
    }),
    mounted() {
        const route = useRoute()
        try {
            fetch(`${API_URL}/${route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.book = result
                    // this.author = result.author
                    console.log(this.book)
                })
        }
        catch (error) {
            console.log('problems on the frontend', error)
        }
    },
    methods: {

    }
}
</script>