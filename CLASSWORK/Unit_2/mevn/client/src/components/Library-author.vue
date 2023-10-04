<template>
    <header>
        <router-link to="/library"><button class="Main">Main Page</button></router-link>
        <!-- <router-link to="/library/author"><button class="Author">Search book by title</button></router-link> -->
    </header>

    <body>
        <h1>List of Authors</h1>
        <div class="Books-list" v-for="author in authors" :key="author._id">
            <h4>
                <div @click="toggleDetails(author)">{{ author.name }}</div>
            </h4>
            <div class="details" v-if="author.showDetails">
                <span v-for="book in author.books" :key="book._id">
                        <p><router-link :to="'/library/book/' + book._id">{{ book.title }}</router-link></p>
                </span>
            </div>
        </div>
    </body>
</template>

<script>

const API_URL = 'http://localhost:4000/library'

export default {
    name: 'authorLibrary',
    data: () => ({
        error: '',
        books: {},
        authors: []

    }),

    mounted() {
        fetch(`${API_URL}/authors`)
            .then(response => response.json())
            .then(result => {
                this.authors = result
                this.authors.forEach(author => {
                    author.showDetails = false
                });
            })
    },

    methods: {
        toggleDetails(author) {
            author.showDetails = !author.showDetails;
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
}</style>