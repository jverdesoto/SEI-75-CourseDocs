<template>
    <div class="landing-page">
        <h1>Welcome to our library</h1>
        <router-link :to="'/library/books'"><button>Search our books</button></router-link>
        <router-link :to="'/library/authors'"><button>Search our authors</button></router-link>
    </div>
</template>
<script>


export default {
    name: 'landingPage',
    methods: {
        
    }
}
</script>