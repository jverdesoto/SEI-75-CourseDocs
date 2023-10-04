<template>
  <main>
    <router-view :key="$route.path" />
  </main>
</template>

<script>

export default {
  name: 'App',
  }

</script>

<style>
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: beige;
  height: auto;
}
</style>
