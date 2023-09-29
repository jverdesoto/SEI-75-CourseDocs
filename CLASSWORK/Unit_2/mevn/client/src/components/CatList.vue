<template>
  <h1>Cats</h1>
  <div id="container">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="nameParam" />
    <label for="age">Age</label>
    <input id="age" type="text" v-model="ageParam" />
    <button id="add" @click="handleSubmit">Add Cat</button>

    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr v-for="cat in catDb" :key="cat.id">
        <td>{{ cat.name }}</td>
        <td>{{ cat.age }}</td>
        <button :id="cat._id" @click="handleDelete">X</button>
      </tr>
    </table>
  </div>
</template>

<script>
const ROOT_URL = `http://localhost:4000/cats`;
export default {
  name: "CatList",
  data() {
    return {
      nameParam: "",
      ageParam: "",
      catDb: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      fetch(ROOT_URL)
        .then((response) => response.json())
        .then((result) => {
          this.catDb = result;
        });
    },
    handleSubmit() {
      const data = {
        name: this.nameParam,
        age: this.ageParam,
      };

      fetch(`${ROOT_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        this.getData();
      });
    },
    handleDelete(e) {
      console.log(e.target.id);
      fetch(`${ROOT_URL}/${e.target.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((res) => console.log(res))
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    },
  },
};
</script>

<style>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#add {
  margin-top: 2vmin;
  height: 30px;
  width: 90px;
}

table {
  width: 60%;
  margin-top: 10vmin;
}
table,
th,
td {
  border: 1px solid;
}
</style>
