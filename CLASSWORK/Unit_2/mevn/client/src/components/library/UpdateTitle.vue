<template>
  <h1>Update {{ $route.params.title }}</h1>
  <div id="form-container">
    <input
      type="text"
      name="title"
      placeholder="Title:"
      v-model="bookName"
    /><br />
    <input
      type="text"
      name="author"
      placeholder="Author:"
      v-model="bookAuthor"
    /><br />
    <label for="date">Date Published: </label>
    <input
      type="date"
      name="date"
      placeholder="Date:"
      v-model="pubDate"
    /><br />
    <button @click="handleUpdate">Update</button>
  </div>
</template>

<script>
const ROOT_URL = "http://localhost:4000/library/title/update";
import { useRoute } from "vue-router";

export default {
  name: "UpdateTitle",
  data() {
    return {
      bookName: "",
      bookAuthor: "",
      pubDate: null,
    };
  },
  mounted() {
    const route = useRoute();
  },
  methods: {
    handleUpdate() {
      const data = {
        title: this.bookName,
        author: this.bookAuthor,
        published: this.pubDate,
      };
      fetch(`${ROOT_URL}/${this.$route.params.title}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
  },
};
</script>
