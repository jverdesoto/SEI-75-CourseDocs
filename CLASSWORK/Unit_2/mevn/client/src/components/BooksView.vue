<template>
    <div>
        <h1>Books</h1>
        <SearchView />

        <div class="book-grid">
            <div v-for="book in books" :key="book.id" @click="selectedBook = book" class="book-card">
                <img :src="'http://localhost:4000/' + book.coverPicture" alt="Book Cover" class="book-cover" />
                <div class="book-title">{{ book.title }}</div>
                <div class="book-author">By: {{ book.authorId ? book.authorId.name : 'Unknown' }}</div>
                <div class="book-date">Published: {{ formatDate(book.publicationDate) }}</div>
            </div>
        </div>

        <div v-if="selectedBook" class="modal">
            <div class="modal-content">
                <img :src="'http://localhost:4000/' + selectedBook.coverPicture" alt="Book Cover"
                    class="book-cover-large" />
                <h2>{{ selectedBook.title }}</h2>
                <p><strong>Author:</strong> {{ selectedBook.authorId.name }}</p>
                <p><strong>Publication Date:</strong> {{ formatDate(selectedBook.publicationDate) }}</p>
                <p><strong>Blurb:</strong> {{ selectedBook.blurb }}</p>
                <button @click="editBook">Edit</button>
                <button @click="deleteBook">Delete</button>
                <button @click="selectedBook = null">Close</button>
                <!-- Add this inside your modal-content div -->
                <form v-if="editingBook" @submit.prevent="updateBook">
                    <input v-model="updatedBookDetails.title" placeholder="Title" />
                    <input v-model="updatedBookDetails.author" placeholder="Author" />
                    <input v-model="updatedBookDetails.blurb" placeholder="Blurb" />
                    <input type="date" v-model="updatedBookDetails.publicationDate" placeholder="Publication Date" />
                    <button type="submit">Update</button>
                </form>

            </div>
        </div>
    </div>
</template>

  
<script>
import SearchView from './SearchView.vue';

export default {
    data() {
        return {
            books: [],
            selectedBook: null,
            editingBook: false,
            updatedBookDetails: {},
        };
    },
    components: {
        SearchView
    },

    async mounted() {
        try {
            const response = await fetch("http://localhost:4000/books");
            if (response.ok) {
                this.books = await response.json();
            } else {
                console.error("Failed to fetch books");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    },

    methods: {
        editBook() {
            this.editingBook = true;
            this.updatedBookDetails = { ...this.selectedBook };
        },

        formatDate(dateString) {
            if (!dateString) return '';
            return dateString.replace(/^(\d{4})-(\d{2})-(\d{2}).*/, '$3/$2/$1');
        },
        async updateBook() {
            try {
                const response = await fetch(`http://localhost:4000/books/${this.selectedBook.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.updatedBookDetails),  // Add 'this.' here
                });

                if (response.ok) {
                    Object.assign(this.selectedBook, this.updatedBookDetails);  // Add 'this.' here too
                } else {
                    console.error('Failed to update book');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
            this.editingBook = false;
        },

        async deleteBook() {
            try {
                const response = await fetch(`http://localhost:4000/books/${this.selectedBook.id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // Remove the book from the local state
                    const index = this.books.findIndex(book => book.id === this.selectedBook.id);
                    this.books.splice(index, 1);
                    this.selectedBook = null;
                } else {
                    console.error('Failed to delete book');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }

    }

};
</script>
  
<style scoped>
.books-view {
    text-align: center;
    margin: 20px;
}

.book-cover-small {
    width: 50px;
    height: auto;
    margin-right: 10px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    text-align: center;
}

.book-cover-large {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
}

/* New or updated styles */
.book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding: 16px;
}

.book-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.book-cover {
    max-width: 100%;
    height: auto;
    margin-bottom: 8px;
}

.book-title {
    font-size: 16px;
    margin-bottom: 8px;
}

.book-author {
    font-size: 14px;
    color: #555;
}

.book-card:hover {
    transform: scale(1.05);
}
</style>
