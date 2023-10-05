<template>
  <h1>Home</h1>
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
    <button @click="handleAddToDB">Add to Database</button>
  </div>
  <router-Link class="home-link" to="/library/author"
    >Search By Author</router-Link
  >
  <router-Link class="home-link" to="/library/title"
    >Search By Titles</router-Link
  >
</template>

<script>
const ROOT_URL = "http://localhost:4000/library";

export default {
  name: "LibraryHome",
  data() {
    return {
      bookName: "",
      bookAuthor: "",
      pubDate: null,
    };
  },
  methods: {
    handleAddToDB() {
      const data = {
        title: this.bookName,
        author: this.bookAuthor,
        published: this.pubDate,
      };

      fetch(`${ROOT_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((message) => console.log(message));
    },
  },
};
</script>

<style scoped>
#form-container {
  margin-bottom: 20%;
}
input {
  height: 20px;
  width: 200px;
}

input,
label {
  margin: 10px;
}
button {
  height: 40px;

  margin: 20px;
}
.home-link {
  margin: 30px;
}
</style>
