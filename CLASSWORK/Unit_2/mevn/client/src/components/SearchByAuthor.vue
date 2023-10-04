<template>
    <h1 id = "searchBy">Search by author</h1>
    <div class="scroll">
        <ul v-for="a in author" :key="a._id">
            <li><router-link :to="'/library/search-by-author/'+a._id">{{ a.name }}</router-link></li>
        </ul>
    </div>   
</template>

<script>

    import { useRoute } from 'vue-router'
    const API_URL = "http://localhost:4000/authors"
    export default {
        name: 'SearchByAuthor',
        data: () => ({
            error: '',
            author: []
        }),

        mounted() {
            const route = useRoute()
            console.warn(route.params.id)
            fetch(`${API_URL}`)
            .then(response => response.json())
            .then(result => {
                this.author = result
            })
            .catch(error => {
            this.error = 'Error fetching author data';
            console.error(error);
            });
        },
        methods: {}
    }
    // Need to pull data from the authors DB to fill the p's
</script>