<template>
    <div class="search-books">
        <label for="search-book">Search for a book here:</label>
        <input type="text" v-model="searchData.inputValue" id="search-book" placeholder="book name">
        <button @click="findBook">search</button>

        <ul>
            <li v-for="result in searchData.results" :key="result._id">{{ result.title }}</li>
        </ul>
    </div>
    <div class="search-authors">
        <label for="search-author">Search for a book here:</label>
        <input type="text" v-model="searchData.author" id="search-author" placeholder="author name">
        <button @click="findBook">search</button>
    </div>
</template>

<script>
const DATA_URL = 'http://localhost:4000/library/books/search'

export default {
    name: 'searchBar',
    data: () => ({
        error: 'no data to display',
        searchData: {
            inputValue: '',
            results: []
        }
    }),
    methods: {
        findBook() {
            fetch(`${DATA_URL}?query=${this.searchData.inputValue}`)
                .then(response => response.json())
                .then(result => {
                    this.searchData.results = result
                })
                .catch(error => {
                    console.log('error searching book in FE', error)
                })

        }
    }
}
</script>
