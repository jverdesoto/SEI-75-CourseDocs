<template>
  <h1>Books of</h1>
  <h2>{{ $route.params.name }}</h2>
  <router-link
    class="link"
    :to="'/library/title/' + book.title"
    v-for="book in books"
    >{{ book.title }}</router-link
  >
</template>

<script>
const ROOT_URL = "http://localhost:4000/library/author";
export default {
  name: "AuthorsBooks",
  data() {
    return {
      books: "",
    };
  },
  mounted() {
    fetch(`${ROOT_URL}/${this.$route.params.name}`)
      .then((res) => res.json())
      .then((result) => (this.books = result));
  },
};
</script>
<style>
.link {
  display: block;
}
</style>
