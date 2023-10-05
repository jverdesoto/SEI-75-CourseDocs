<template>
  <h1>Authors</h1>
  <router-link
    class="link"
    :to="'/library/author/' + author.name"
    v-for="author in authors"
    >{{ author.name }}</router-link
  >
</template>

<script>
const ROOT_URL = "http://localhost:4000/library/author";
export default {
  name: "Authors",
  data() {
    return {
      authors: "",
    };
  },
  mounted() {
    fetch(ROOT_URL)
      .then((res) => res.json())
      .then((result) => (this.authors = result));
  },
};
</script>
<style>
.link {
  display: block;
}
</style>
