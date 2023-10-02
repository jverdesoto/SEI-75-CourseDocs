<template>
    <section id="main">
        <h1 id = "library"> Library</h1>
        <div id="searchBy">
            <p id="searchByAuthor"><router-link :to="'/library/search-by-author'">Search by author</router-link></p>
            <p id="searchByTitle"><router-link :to="'/library/search-by-title'">Search by title</router-link></p>
        </div>
        <form id="submitBook">
            <section id="inputs">
                <input type="text" v-model="book.title" title="title" placeholder="Title">
                <input type="text" v-model="book.author" author="author" placeholder="Author">
                <input type="text" v-model="book.year" year="year" placeholder="Year">
            </section>
            <button v-on:click="addBook" id="submit">Add book</button>
        </form>
    </section>
</template>

<script>

export default {
        name: 'LibraryHome',
        data: () => ({
            error: '',
            book: {
                title: '',
                author: '',
                year: ''
            }

        }),
        methods: {
            addBook: function () {
                console.log(`New book ${this.book.title} - ${this.book.author}`);
                    fetch('http://localhost:4000/add/books', {         // frontend sending it to the backend 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: this.book.title,
                        author: this.book.author
                    })
                })
            }
        }
    }
</script>

<style>

h1#library {
    font-size: 7.5vmin;
}

section#main {
    height: 90vmin;
    width: 75vmin;
    border: solid black;
}

div#searchBy {
    display: flex;
    justify-content: space-evenly;
}

p#searchByAuthor {
    font-size: 2.5vmin;
}
p#searchByTitle {
    font-size: 2.5vmin;
}

h1#searchBy {
    font-size: 5vmin;
}

li {
    font-size: 2vmin;
}

button#submit {
    margin-top: 1vmin;
}

input {
    height: 3vmin;
}
</style>