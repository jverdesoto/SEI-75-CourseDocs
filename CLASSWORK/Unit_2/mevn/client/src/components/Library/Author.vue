<template>
    <div v-if="data.author">
        <h2>{{ data.author.name }}</h2>
        <h3>Books By this Author</h3>
        <ul>
            <div v-for="book in data.books" :key="book._id">
                <li><router-link :to="`/AllBooks/${book._id}`">{{ book.title }}</router-link></li>
            </div>
        </ul>
    </div>
  </template>
  <script>
  import { RouterLink, useRoute } from 'vue-router'
  export default {
    name: 'AuthorVue',
    data: () => ({
        error: '',
        data: {}
    }),
    mounted() {
        const route = useRoute();
        fetch(`http://localhost:4000/AllAuthors/${route.params.id}`)
            .then((response) => response.json())
            .then((result) => {
            this.data = result;
        })
            .catch((error) => {
            this.error = 'Error fetching data: ' + error;
        });
    },
    methods: {},
    components: { RouterLink }
};
  </script>