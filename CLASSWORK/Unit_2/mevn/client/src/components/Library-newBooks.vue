<template>
    <header>
        <a href="/library"><button class="Main">Main Page</button></a>
    </header>
    <h2>Donate a Book</h2>
    <div class="bookDetails">
        <p><input type="text" v-model="book.title" placeholder="Title"></p>
        <p><input type="text" v-model="book.author" placeholder="Author"></p>
        <p><input type="text" v-model="book.date" placeholder="Year of Publishing"></p>
    </div>
    <button @click="addBook">Donate</button>
</template>

<script>
const API_URL = 'http://localhost:4000/library'

export default {
    name: 'newBooks',
    data: () => ({
        error: '',
        book: {
            title: '',
            author: '',
            date: ''
        }
    }),

    methods: {
        addBook: function () {
            if (!this.book.title || !this.book.author || !this.book.date) {
                this.error = 'Please fill in all fields.';
                return;
            }

            fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Title: this.book.title,
                    Author: this.book.author,
                    Date: this.book.date
                })
            })
                .then(res => console.log(res.status))
            alert((`New book: ${this.book.title} from ${this.book.author} released in ${this.book.date} was added to the library`));
        }
    }
}


</script>

<style>
p {
    margin: 5px;
}

.Main {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 10px 20px;
    background-color: #65686ba6;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.Main:hover {
    background-color: #898b8d56;
}
</style>