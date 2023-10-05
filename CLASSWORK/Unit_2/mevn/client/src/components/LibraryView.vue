<template>
    <div>
        <h1>Welcome to the Library</h1>
        <button @click="goTo('authors-view')">View Authors</button>
        <button @click="goTo('books-view')">View Books</button>
        <router-link to="/add-book">Add a New Book</router-link>
        <SearchView />
        <router-view></router-view>
    </div>
</template>
  
<script>
import SearchView from './SearchView.vue';

export default {
    components: {
        SearchView
    },
    methods: {
        goTo(view) {
            this.$router.push(`/library/${view}`);
        },
       
    }
};
</script>
  
<style scoped>
/* Your styles here */
</style>