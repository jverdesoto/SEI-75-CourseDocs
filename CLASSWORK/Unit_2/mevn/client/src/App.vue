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
