<template>
    <h1>Welcome to our Test Library</h1>
    <h3>How can we help you today?</h3>
    <nav>
        <button class="search" type="button">Search Books</button>
        <a href="library/newBooks"><button class="donate" type="button">Donate Books</button></a>
    </nav>
    <a href="library/author"><button type="button">Search book by author</button></a>
    <button type="button">Search book by title</button>


    
</template>

<script>
export default {
    name: 'booksLibrary'
}

</script>