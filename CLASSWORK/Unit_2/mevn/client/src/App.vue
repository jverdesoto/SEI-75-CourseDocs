<template>
  <dogsView />
  <singleDogView />
</template>

<script>
//step 1 - import all the views that we want to use from the components folder
import dogsView from './components/dogsView.vue'
import singleDogView from "./components/singleDogView.vue";

//this is what the root page is showing atm
export default {
  name: 'App',
  components: {
    dogsView,
    singleDogView
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
