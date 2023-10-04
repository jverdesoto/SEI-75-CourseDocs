<template>
    <div>
      <h1 class="home-library">Welcome to the Library</h1>
      <div class="menu">
      <router-link class="menu-item" :to="'/books/authorsearch'">
        <h3>List of Authors</h3>
      </router-link>
      <router-link class="menu-item" :to="'/books/titlesearch'">
        <h3>List of Books</h3>
      </router-link>
      <router-link class="menu-item" :to="'/books/add'">
        <h3>Add a New Book</h3>
      </router-link>
    </div>
    </div>
  </template>

  <script>

    export default {
        name: 'homeLibrary',
        data: () => ({
        errors: '',
        home: ''
    }),
    mounted() {
        fetch('http://localhost:4000/homeLibrary')
        .then(response => response.json())
        .then(result => {
            this.home = result
        })
    }
       
  }

</script>

<style>
.home-library {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.menu {
  display: flex;
  justify-content: center;
}

.menu-item {
  text-decoration: none;
  background-color: #997777;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #998877;
}
</style>