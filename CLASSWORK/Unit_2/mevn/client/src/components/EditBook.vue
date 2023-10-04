<template>
    <header>
        <router-link to="/library"><button class="Main">Main Page</button></router-link>
    </header>
    <h1>Replace Book</h1>
    <div class="bookDetails">
        <p><input type="text" v-model="book.title" placeholder="Title">{{ book.title }}</p>
        <p><input placeholder="Author">{{ book.author }}</p>
        <p><input type="text" v-model="book.date" placeholder="Year of Publishing">{{ book.date }}</p>
    </div>
    <button @click="editBook">Change</button>
</template>

<script>
const API_URL = 'http://localhost:4000/library'
import { useRoute } from 'vue-router';
export default {
    name: 'editBook',
    data: () => ({
        error: '',
        book: {
            id: '',
            title: '',
            author: '',
            date: ''
        }
    }),

    mounted() {
        const route = useRoute()
        fetch(`${API_URL}/book/${route.params.id}`)
            .then(result => result.json())
            .then(data => {
                this.book.id = route.params.id
                this.book.title = data.title
                this.book.author = data.author ? data.author.name : ''
                this.book.date = data.date
            })
    },

    methods: {
        editBook() {
            fetch(`${API_URL}/book/${this.book.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.book.title,
                    date: this.book.date
                })
            })

                .then(() => {
                    this.$router.replace({ name: 'bookDetails', params: { id: this.book.id } });
                })
        }
    }
}

</script>

<style>
p {
    margin: 10px 0;
}

.bookDetails {
    max-width: 400px;
    margin: 0 auto;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
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

button {
    background-color: #65686ba6;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}
</style>