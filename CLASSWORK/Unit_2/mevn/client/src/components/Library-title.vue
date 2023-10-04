<template>
    <header>
        <router-link to="/library"><button class="Main">Main Page</button></router-link>
        <!-- <router-link to="/library/author"><button class="Author">Search book by title</button></router-link> -->
    </header>

    <body>
        <h1>List of Available Books</h1>
    <div class="Books-list" v-for="book in books" :key="book._id">
      <h4>
        <div @click="toggleDetails(book)">{{ book.title }}</div>
      </h4>
      <div class="details" v-if="book.showDetails">
        <p><router-link :to="'/library/book/' + book._id">{{ book.author.name }}</router-link></p>
      </div>
    </div>
    </body>
</template>

<script>

const API_URL = 'http://localhost:4000/library'

export default {
    name: 'bookTitles',
    data: () => ({
        error: '',
        books: {},
        authors: []

    }),

    mounted() {
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.books = result
                this.books.forEach((book) => {
                    book.showDetails = false;
                });
            })
    },

    methods: {
        toggleDetails(book) {
            book.showDetails = !book.showDetails;
        }
    },
}

</script>


<style>
h1 {
    margin-bottom: 35px;
}

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.Books-list {
    margin-top: 20px;
}

h4 {
    cursor: pointer;
    margin: 0;
}

.details {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
}
</style>