<template>
    <div>
      <ul>
        <li v-for="repo in repos" :key="repo.id">{{ repo.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        repos: [],
      };
    },
    async mounted() {
      this.repos = await fetchGitHubRepos("someUsername");
    },
  };
  </script>
  