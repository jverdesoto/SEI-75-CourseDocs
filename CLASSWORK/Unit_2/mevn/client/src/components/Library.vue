<template>
    <h1>Welcome to our Test Library</h1>
    <h3>How can we help you today?</h3>
    <nav>
        <!-- <button class="search" type="button">Search Books</button> -->
        <router-link to="library/newBooks"><button class="donate" type="button">Donate Books</button></router-link>
    </nav>
    <router-link to="library/author"><button type="button">Search book by author</button></router-link>
    <router-link to="library/title"><button type="button">Search book by title</button></router-link>
</template>

<script>

export default {
    name: 'booksLibrary'
}

</script>

<style>
h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 10px;
}

h3 {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}

nav {
  text-align: center;
}

button {
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  background-color: #65686ba6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #898b8d56;
}

.donate:hover {
  background-color: #5b7940;
}

</style>
