<template>
    <div>
        <h1>{{ books?.book?.title }}</h1>
        <h1>{{ books?.book?.date }}</h1>
        <h1>{{ books?.author?.name }}</h1>
    </div>
    <h1>{{ books.title }}</h1>
    <h1>{{ books.date }}</h1>
</template>
<script>
import { useRoute } from 'vue-router'
export default {
    name: 'BookVue',
    data: () => ({
        error: '',
        books: {},
    }),
    mounted() {
        const route = useRoute()
        fetch(`http://localhost:4000/AllBooks/${route.params.id}`)
            .then((response) => response.json())
            .then((result) => {
                this.books = result
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {},
};
</script>