<template>
    <h2>Library Home Page</h2>
    <div class="button-container">
        <router-link to="/library/author"><div class="button">Authors</div></router-link>
        <router-link to="/library/title"><div class="button">Books</div></router-link>
        <router-link to="/library/addbook"><div class="button">Add Book</div></router-link>
    </div>
</template>

<script>
export default {
  name: 'LibraryHome'
}
</script>