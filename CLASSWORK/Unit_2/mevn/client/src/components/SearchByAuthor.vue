<template>
    <h1 id = "searchBy">Search by author</h1>
    <ul>
        <p id="searchByAuthor"><router-link :to="'/library/search-by-author:name'">Author</router-link></p>
        <p id="searchByAuthor"><router-link :to="'/library/search-by-author:name'">Author</router-link></p>
        <p id="searchByAuthor"><router-link :to="'/library/search-by-author:name'">Author</router-link></p>
        <p id="searchByAuthor"><router-link :to="'/library/search-by-author:name'">Author</router-link></p>
        <p id="searchByAuthor"><router-link :to="'/library/search-by-author:name'">Author</router-link></p>
        <p id="searchByAuthor"><router-link :to="'/library/search-by-author:name'">Author</router-link></p> 
        <!-- Takes you to a page of books by said author  -->
    </ul>
</template>

<script>

    // const API_URL = ""
    export default {
        name: 'SearchByAuthor',
        error: ''
    }

    // Need to pull data from the authors DB to fill the p's
</script>