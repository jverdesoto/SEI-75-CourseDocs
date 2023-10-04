<template>
    <section id="main">
        <h1 id = "library"> Library</h1>
        <div id="searchBy">
            <p id="searchByAuthor"><router-link :to="'/library/search-by-author'">Search by author</router-link></p>
            <p id="searchByTitle"><router-link :to="'/library/search-by-title'">Search by title</router-link></p>
        </div>
        <form id="submitBook">
            <section id="inputs">
                <input type="text" v-model="book.title" name="title" placeholder="Title" required>
                <input type="text" v-model="book.author" name="author" placeholder="Author" required>
                <input type="text" v-model="book.year" name="year" placeholder="Year" required>
            </section>
            <button v-on:click="submitBook" id="submit">Submit</button>
        </form>
        <button v-on:click="addBook" id="addBook">Add book</button>
    </section>
</template>

<script>

const titleRegex = /\w\s*/;
const authorRegex = /^[A-Za-z\s.]*$/;
const yearRegex = /\d{4,4}/;

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
            submitBook: function (e) {
                e.preventDefault()
                if (!this.book.title || !this.book.author || !this.book.year) {
                    alert("Please fill in all required fields.");
                    return;
                }
                if (!titleRegex.test(this.book.title)) {
                    alert("Please input a valid title");
                    return;
                }
                if (!authorRegex.test(this.book.author)) {
                    alert("Please input a valid author name");
                    return;
                }
                if (!yearRegex.test(this.book.year)) {
                    alert("Please input a valid year");
                    return;
                }
                console.log(`New book ${this.book.title} - ${this.book.author} - ${this.book.year}`);
                    fetch('http://localhost:4000/add/books', {         // frontend sending it to the backend 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: this.book.title,
                        author: this.book.author,
                        year: this.book.year
                    })
                })
            document.getElementById("inputs").style.opacity = 0;
            document.getElementById("submit").style.opacity = 0;
            document.getElementById("searchByAuthor").style.opacity = 1;
            document.getElementById("searchByTitle").style.opacity = 1;
            document.getElementById("addBook").style.opacity = 1;
            },
            addBook() {  
            document.getElementById("inputs").style.opacity = 1;
            document.getElementById("searchByAuthor").style.opacity = 0;
            document.getElementById("searchByTitle").style.opacity = 0;
            document.getElementById("addBook").style.opacity = 0;
            document.getElementById("submit").style.opacity = 1; 
        }
    }

    // function addBook() {  
    //         document.getElementById("inputs").style.display = "block";
    //         document.getElementById("submit").style.display = "block";
}

</script>

<style>

h1#library {
    font-size: 7.5vmin;
}

h1#authorOrBookName {
    font-size: 5vmin;
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
    font-size: 2vmin;
}
p#searchByTitle {
    font-size: 2vmin;
}

p#bookDetails {
    font-size: 2vmin;
}

h1#searchBy {
    font-size: 5vmin;
}

li {
    font-size: 2vmin;
}

button#submit {
    margin-top: 1vmin;
    opacity: 0;
}

button#addBook {
    margin-top: 1vmin;
    height: 3vmin;
}
button#addBook:hover {
    scale: 1.05;
}

input {
    height: 3vmin;
}

section#inputs {
    opacity: 0;
}

div.scroll {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #ccc;
}
</style>