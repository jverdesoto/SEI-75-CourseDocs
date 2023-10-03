<template>
    <div>
        <div v-for='book in books' :key="book._id">
            <p><router-link :to="'/AllBooks/' + book._id" ><h1>{{ book.title }}</h1></router-link></p></div>
    </div>
</template>
<script>
export default {
    name: 'AllBooks',
    data: () => ({
        error: '',
        books: [],
    }),
    mounted() {
        fetch('http://localhost:4000/Allbooks')
            .then((response) => response.json())
            .then((result) => {
                this.books = result;
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {},
};
</script>