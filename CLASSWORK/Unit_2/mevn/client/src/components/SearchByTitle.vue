<template>
    <h1 id = "searchBy">Search by title</h1>
    <div class="scroll">
        <ul v-for="b in book" :key="b._id">
            <li><router-link :to="'/library/search-by-title/'+b._id">{{ b.title }}</router-link></li>
        </ul>
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    const API_URL2 = "http://localhost:4000/books"
    export default {
        name: 'SearchByTitle',
        data: () => ({
        error: '',
        book: []
        }),

        mounted() {
            const route = useRoute()
            console.warn(route.params.id)
            fetch(`${API_URL2}`)
            .then(response => response.json())
            .then(result => {
                this.book = result
            })
            .catch(error => {
            this.error = 'Error fetching book data';
            console.error(error);
            });
        },
        methods: {}
    }
</script>