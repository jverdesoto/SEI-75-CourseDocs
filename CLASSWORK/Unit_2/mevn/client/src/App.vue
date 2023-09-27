<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <DogsView />
</template>

<script>
import DogsView from './components/DogsView.vue';

export default {
  name: 'App',
  components: {
    DogsView
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
