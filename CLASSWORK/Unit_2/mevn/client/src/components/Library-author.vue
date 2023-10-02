<template>
    <header>
        <a href="/library"><button class="Main">Main Page</button></a>
        <a href="/library/title"><button class="Title">Search book by title</button></a>
    </header>
    <div class="Authors-list" v-for="book in books" :key="book._id">
        <ul>
            <li>{{ book.Author }}</li>
            <li>{{ book.Title }}</li>
            <li>{{ book.Date }}</li>
        </ul>
    </div>
</template>

<script>
const API_URL = 'http://localhost:4000'

export default {
    name: 'authorLibrary',
    data: () => ({
        error: '',
        books: {}

    }),

    mounted() {
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.books = result
            })
    },
}

</script>


<style>
button {
    top: 10px;
    left: 10px;
    padding: 10px 20px;
    background-color: #65686ba6;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
}

button.title {
    top: 10px;
    right: 10px;
    padding: 10px 20px;
}

button:hover {
    background-color: #898b8d56;
}
</style>