<template>
  <div class="home-container">
    <h1 class="title">Library Home Page</h1>
    <div class="buttons-container">
      <button class="nav-button">
        <router-link to="/AllBooks">All Books</router-link>
      </button>
      <button class="nav-button">
        <router-link to="/Authors">Authors</router-link>
      </button>
      <button class="nav-button">
        <router-link to="/AddBook">Add Book</router-link>
      </button>
      <button class="nav-buttons">
        <router-link to="/Login" @click="loggedIn">Login</router-link>
      </button>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'libraryVue',
        data: () => ({
            error: '',
        })
    }
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.title {
  font-size: 48px; /* Increased font size for a more prominent title */
  margin-bottom: 20px; /* Slightly reduced margin for tighter spacing */
  color: #333; /* Darkened text color for better readability */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added a subtle text shadow for depth */
}

.buttons-container {
  display: flex;
  gap: 20px;
}

.nav-button {
  padding: 15px 30px; /* Increased button padding for a more comfortable touch */
  font-size: 20px; /* Slightly increased font size for buttons */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase; /* Uppercase button text for consistency */
}

.nav-button:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Slightly scale up the button on hover for an interactive feel */
}

a {
  text-decoration: none;
  color: inherit;
}

/* Style router-link text */
.router-link-exact-active {
  font-weight: bold; /* Bold font for active links */
  text-decoration: underline; /* Underline for active links */
}
</style>
