<template>
    <div>
        <div v-for='authors in author' :key="authors._id"><h1>{{ authors.author }}</h1>
        <p><router-link :to="'/Book/' + author._id" ><h1>{{ authors.title }}</h1></router-link></p>
    </div>
    <h1>{{ author.name }}</h1>
    <h1>{{ author._id }}</h1>
    <h1>{{ author }}</h1>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
export default {
    name: 'AuthorVue',
    data: () => ({
        error: '',
        author: {},
    }),
    mounted() {
        const route = useRoute()
        fetch(`http://localhost:4000/AllAuthors/${route.params.id}`)
            .then((response) => response.json())
            .then((result) => {
                this.author = result
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {},
};
</script>