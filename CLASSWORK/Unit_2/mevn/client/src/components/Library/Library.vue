<template>
    <!-- <p><input v-model="book.title" type="text" placeholder="Book title"></p>
    <p><input v-model="book.publishingDate" type="text" name="PublishingDate" placeholder="Book Publishing date"></p>  -->
    <h1>HomePage</h1>
    <p><button><router-link :to="'/AllAuthors'" >Authors</router-link></button></p>
    <p><button><router-link :to="'/AllBooks'" >Books</router-link></button></p>
    <p><button><router-link :to="'/AddBook'" >Add Book</router-link></button></p>
</template>
<script>
    export default {
        name: 'libraryVue',
        data: () => ({
            error: '',
        }),
    }
</script>