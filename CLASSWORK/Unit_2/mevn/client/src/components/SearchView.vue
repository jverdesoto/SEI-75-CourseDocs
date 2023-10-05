<template>
    <div v-if="bookResults.length">
        <h2>Book Results:</h2>
        <ul>
            <li v-for="book in bookResults" :key="book._id">
                {{ book.title }} by {{ book.authorName }}
            </li>
        </ul>
    </div>
    <div v-if="authorResults.length">
        <h2>Author Results:</h2>
        <ul>
            <li v-for="author in authorResults" :key="author._id">
                {{ author.name }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchTerm: '',
            bookResults: [],
            authorResults: []
        };
    },
    methods: {
        async search() {
            if (!this.searchTerm) {
                this.bookResults = [];
                this.authorResults = [];
                return;
            }

            // Fetch books and authors
            const books = await this.fetchData('books');
            const authors = await this.fetchData('authors');

            // Create a regex for the search term
            const regex = new RegExp(this.searchTerm, 'i');

            // Filter books and authors
            const filteredBooks = books.filter(book => regex.test(book.title));
            const filteredAuthors = authors.filter(author => regex.test(author.name));

            // Combine and set the search results
            this.bookResults = filteredBooks;
            this.authorResults = filteredAuthors;
        },

        async fetchData(endpoint) {
            const response = await fetch(`http://localhost:4000/${endpoint}`);
            if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`);
            return await response.json();
        }
    }
};
</script>

  
<style scoped>
/* Style for the search bar */
input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
}

/* Style for the search results */
h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #f1f1f1;
    margin: 8px 0;
    padding: 14px;
    text-align: center;
    border-radius: 4px;
}
</style>
