<template>
    <h1>The World's Worst Library</h1>
    <p> <RouterLink :to="'/library/author'">Authors</RouterLink> </p>
    <p> <RouterLink :to="'/library/book'">Books</RouterLink> </p>

    <LibraryForm />
</template>


<script>
import LibraryForm from './LibraryForm'

export default {
        name: 'LibraryHome',
        data: () => ({
            error: '',
        }),
        components: {
            LibraryForm,
        },
        methods: {}
    }
</script>