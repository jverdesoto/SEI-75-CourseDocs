<template>
    <div>
      <h1>{{ userData.name }}</h1>
      <!-- more user info here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userData: null,
      };
    },
    async mounted() {
      this.userData = await fetchGitHubUser("someUsername");
    },
  };
  </script>
  