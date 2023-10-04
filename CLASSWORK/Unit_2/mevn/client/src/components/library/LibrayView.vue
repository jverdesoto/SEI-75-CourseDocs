<template>
    <h1>My libray</h1>
    <h3>Select what you're searching for</h3>
    <MainNav />
</template>
<script>
import MainNav from './Navigation'
export default {
    name: 'LibrayView',
    components: {
        MainNav
    }
}
</script>

<style>
button {
    cursor: pointer;
}
</style>