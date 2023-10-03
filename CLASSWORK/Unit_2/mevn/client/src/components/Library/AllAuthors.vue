<template>
    <div>
        <div v-for='author in authors' :key="author._id"><p><router-link :to="'/AllAuthors/' + author._id" ><h1>{{ author.name }}</h1></router-link></p>
    </div>
    </div>
</template>
<script>
export default {
    name: 'AllAuthors',
    data: () => ({
        error: '',
        authors: [],
    }),
    mounted() {
        fetch('http://localhost:4000/Allauthors')
            .then((response) => response.json())
            .then((result) => {
                this.authors = result;
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {},
};
</script>