<template>
  <header>
    <MainNav />
  </header>
  <main>
    <router-view :key="$route.path" />
  </main>
  <footer></footer>
</template>

<script>
import MainNav from './components/library/Navigation.vue'
export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
