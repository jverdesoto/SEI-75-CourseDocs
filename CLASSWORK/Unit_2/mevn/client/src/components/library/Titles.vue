<template>
  <div id="container">
    <h1>Titles</h1>
    <table>
      <tr>
        <th>Title</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="title in titles">
        <td>
          <router-link
            class="link"
            :to="'/library/title/' + title.titles.title"
            >{{ title.titles.title }}</router-link
          >
        </td>
        <td>
          <router-link
            class="link update"
            :to="'/library/title/update/' + title.titles.title"
            >Update</router-link
          >
        </td>
        <td>
          <button :name="title.titles.title" @click="handleDelete">
            Delete
          </button>
        </td>
      </tr>
      <div></div>
    </table>
  </div>
</template>

<script>
const ROOT_URL = "http://localhost:4000/library/title";
export default {
  name: "Titles",
  data() {
    return {
      titles: "",
    };
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    handleDelete(e) {
      fetch(`${ROOT_URL}/delete/${e.target.name}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((message) => alert(message))
        .then(() => this.refreshData());
    },
    refreshData() {
      fetch(ROOT_URL)
        .then((res) => res.json())
        .then((result) => (this.titles = result));
    },
  },
};
</script>
<style scoped>
#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.link {
  display: inline;
  margin: 0 10px 0 10px;
}
.update {
  text-decoration: none;
  color: black;
  border: 1px solid black;
  font-size: 15px;
  background-color: rgb(228, 228, 228);
  border-radius: 2px;
}
button {
  margin-left: 20px;
}
table,
tr,
td,
th {
  border: none;
}
</style>
