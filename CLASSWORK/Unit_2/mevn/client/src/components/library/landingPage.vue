<template>
    <div class="landing-page">

        <div class="landing-page-search">
            <h1>Welcome to our library</h1>
            <div class="landing-page-btns">
                <button><router-link :to="'/library/books'" class="router-link">Search our books</router-link></button>
                <button><router-link :to="'/library/authors'" class="router-link">Search our authors</router-link></button>
                <button><router-link :to="'/library/addnewbook'" class="router-link">Add a new book</router-link></button>
            </div>
        </div>

        <!-- <div class="search-bar-container">
            <searchBar />
        </div> -->

    </div>
</template>
<script>
// import searchBar from '../../components/library/searchBar.vue'

export default {
    name: 'landingPage',
    // components: {
    //     searchBar
    // }
}
</script>

<style scoped>
.landing-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.landing-page-search {
    margin: 10%;
}

.landing-page-search > h1 {
    text-align: center;
    margin: 5%;
}

.landing-page-btns > button {
   margin: 0 10px;
   width: 200px;
   height: 60px;
   box-shadow: 2px 2px 4px;
}

.router-link {
    text-decoration: none;
    color: inherit
}
</style>