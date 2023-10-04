<template>
    <div>
        <h1>{{ books?.book?.title }}</h1>
        <h1>{{ books?.book?.date }}</h1>
        <!-- <h1>{{ books?.author?.name }}</h1>
        <h1>{{ books?.author?._id }}</h1> -->
        <p><router-link :to="'/AllAuthors/' + books?.author?._id" ><h1>{{ books?.author?.name }}</h1></router-link></p>
    </div>
    <p><button @click="deleteBook">Delete Book</button></p>
    <p><router-link :to="`/AddBook/${id}`"><button>Edit Book</button></router-link></p>
    <!-- <h1>{{ books.title }}</h1>
    <h1>{{ books.date }}</h1>
    <h1>{{ books.author }}</h1> -->
</template>
<script>
import { useRoute } from 'vue-router'
export default {
    name: 'BookVue',
    data: () => ({
        error: '',
        books: {},
        id: ''
    }),
    mounted() {
        const route = useRoute()
        fetch(`http://localhost:4000/AllBooks/${route.params.id}`)
            .then((response) => response.json())
            .then((result) => {
                this.books = result
                this.id = route.params.id
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {
        deleteBook: function () {
            console.log(this.id);
            fetch(`http://localhost:4000/AllBooks/${this.id}`,{
                method: "DELETE"
            })
            .then(() => {
                this.$router.replace({ name: 'AllBooks'})
            })
        }
    },
};
</script>