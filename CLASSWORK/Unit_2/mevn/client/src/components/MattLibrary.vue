<template>
    <div class="library">
        <h3>Matt's Library</h3>

        <p><input type="text" name="title" v-model="book.title" placeholder="title"></p>
        <p><input type="text" name="author" v-model="book.author" placeholder="author"></p>
        <p><input type="number" name="date" v-model="book.date" placeholder="publication year"></p>
        <p><button @click="addBook">Add new book</button></p>

        <router-link to="/library/titles">
            <template v-slot:default="{ navigate, href }">
                <button @click="navigate" :href="href" class="nav-button book-list-button">
                    Go to Book List
                </button>
            </template>
        </router-link>

        <router-link to="/library/authors">
            <template v-slot:default="{ navigate, href }">
                <button @click="navigate" :href="href" class="nav-button author-list-button">
                    Go to Author List
                </button>
            </template>
        </router-link>
    </div>
</template>

<script>

export default { // the name of your component
name: 'MattLibrary',
data: () => ({ // 
        error: '',
        book: {
            title: '',
            author: '',
            date: ''
        } 
    }),

    methods: {
        addBook: function () {
            console.log(`New book ${this.book.title} | ${this.book.date} | ${this.book.author}`);
            fetch('http://localhost:4000/add-book', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    title: this.book.title,
                    author: this.book.author,
                    date: this.book.date

                })
            })
            .then(res => console.log(res.status))
            this.book = { title: '', author: '', date: null}; 
        }
}
}

</script>


<style>
h3 {
    font-size: xx-large;
}

.library {
    text-align: center;
    position: relative;
}

.nav-button {
    display: block;  /* Changes from inline-block to block */
    padding: 10px 20px;
    background-color: #4CAF50;  /* Green */
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    position: absolute;
    top: 10px;  /* Initial top position for the first button */
    left: 10px;  /* Same left position for all buttons */
    border: none;
    cursor: pointer;
    border-radius: 4px;
}

.nav-button:hover {
    background-color: #45a049; /* Darker green */
}

/* Use class names to adjust position of individual buttons */
.book-list-button {
    top: 10px;
}

.author-list-button {
    top: 60px; /* Adjust this value according to your desired spacing between buttons */
}

</style>

