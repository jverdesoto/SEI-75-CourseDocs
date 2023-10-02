<template>
    <h1 id = "searchBy">Search by title</h1>
    <ul>
        <p id="searchByTitle"><router-link :to="'/library/search-by-title:title'">Title</router-link></p>
        <p id="searchByTitle"><router-link :to="'/library/search-by-title:title'">Title</router-link></p>
        <p id="searchByTitle"><router-link :to="'/library/search-by-title:title'">Title</router-link></p>
        <p id="searchByTitle"><router-link :to="'/library/search-by-title:title'">Title</router-link></p>
        <p id="searchByTitle"><router-link :to="'/library/search-by-title:title'">Title</router-link></p>
        <p id="searchByTitle"><router-link :to="'/library/search-by-title:title'">Title</router-link></p>
        <!-- Takes you to a page with info about said book -->
    </ul>
</template>

<script>
     export default {
        name: 'SearchByTitle',
        error: ''
    }

     // Need to pull data from the books db to fill the p's
</script>