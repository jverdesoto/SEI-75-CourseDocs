<template>
    <div class="add-new-book-container">
        <input type="text" v-model="newBookData.title" name="newBookTitle" placeholder="book name">
        <input type="text" v-model="newBookData.author.name" name="newBookAuthor" placeholder="book author">
        <label for="publishingDate">Publishing Year:</label>
        <input type="number" v-model="newBookData.publishingDate" name="publishingDate" id="publishingDate">
        <button @click="addNewBook">Submit</button>
    </div>
</template>
<script>

const DATA_URL = 'http://localhost:4000/library/addnewbook'
export default {
    name: 'addNewBook',
    data: () => ({
        error: 'could not export data',
        newBookData: {
            title: '',
            author: {
                name: ''
            },
            publishingDate: null,
        }
    }),
    methods: {
        addNewBook() {
            console.log(`passing ${this.newBookData.author.name}, ${this.newBookData.title}`)
            fetch(DATA_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.newBookData.title,
                    author: {
                       name: this.newBookData.author.name
                    },
                    publishingDate: this.newBookData.publishingDate
                })
            })
                .then(response => response.json())
        }
    }
}
</script>
