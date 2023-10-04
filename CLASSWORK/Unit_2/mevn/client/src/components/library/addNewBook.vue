<template>
    <div class="add-new-book-container">
        <h1>Add a new book to our collection</h1>
        <div class="add-new-book-inputs">
            <label for="newBookTitle">Book title:</label>
            <input type="text" v-model="newBookData.title" name="newBookTitle" id="newBookTitle" placeholder="book name">
            <label for="newBookAUthor">Author name:</label>
            <input type="text" v-model="newBookData.author.name" name="newBookAuthor" id="newBookAuthor"
                placeholder="book author">
            <label for="publishingDate">Publishing Year:</label>
            <input type="number" v-model="newBookData.publishingDate" name="publishingDate" id="publishingDate">
            <button @click="addNewBook">Submit</button>
        </div>
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

<style scoped>
.add-new-book-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

</style>
