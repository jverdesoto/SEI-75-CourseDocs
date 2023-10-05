<template>
  <h2>Title details</h2>
  <h1>{{ book.title }}</h1>
  <router-link :to="'/library/author/' + book.author">
    <h2>{{ book.author }}</h2>
  </router-link>

  <h3>{{ book.publishingDate }}</h3>
</template>

<script>
const ROOT_URL = "http://localhost:4000/library/title";
export default {
  name: "TitleDetails",
  data() {
    return {
      book: "",
    };
  },
  mounted() {
    fetch(`${ROOT_URL}/${this.$route.params.title}`)
      .then((res) => res.json())
      .then((result) => (this.book = result));
  },
};
</script>
