<template>
    <div class="library-container">
        <router-link to="/dogs">
            <span class="single-home-icon">🏠</span> Home
        </router-link>
        <h1>Library</h1>
        <input v-model="searchTerm" @input="search" placeholder="Search..." />
        <button @click="view = 'authors'">View Authors</button>
        <button @click="view = 'books'">View Books</button>
        <button @click="showBookModal = true">Add Book</button>

        <!-- add Book Modal -->
        <div v-if="showBookModal" class="modal">
            <div class="modal-content">
                <h3>Add Book</h3>
                <input name="bookTitle" v-model="newBook.title" placeholder="Title" />
                <input name="bookAuthor" v-model="newBook.author" placeholder="Author" />
                <textarea v-model="newBook.blurb" placeholder="Blurb"></textarea>
                <input name="publicationDate" type="date" v-model="newBook.publicationDate" />
                <input name="bookCover" type="file" @change="onBookCoverChange" />
                <button @click="addBook">Add Book</button>
                <button @click="showBookModal = false">Close</button>
                <div v-if="errorMessage" class="error-message">
                    {{ errorMessage }}
                </div>
            </div>
        </div>
        <!-- Author Modal
        <div v-if="showAuthorModal" class="modal">
            <div class="modal-content">
                <h3>Add Author</h3>
                <input v-model="newAuthor.name" placeholder="Name" />
                <input v-model="newAuthor.age" type="number" placeholder="Age" />
                <input v-model="newAuthor.numberOfBooks" type="number" placeholder="Number of Books" />
                <input v-model="newAuthor.listOfBooks" placeholder="List of Books (comma separated)" />
                <textarea v-model="newAuthor.description" placeholder="Description"></textarea>
                <input type="file" @change="onAuthorImageChange" />
                <button @click="addAuthor">Add Author</button>
                <button @click="showAuthorModal = false">Close</button>
            </div>
        </div> -->

        <!-- display search results -->
        <div v-if="searchResults.length > 0">
            <h2>Unified Search Results</h2>
            <div v-for="result in searchResults" :key="result._id">
                <div v-if="result.type === 'author'">
                    <p><strong>Author:</strong> {{ result.name }} (Age: {{ result.age }}, Books: {{ result.numberOfBooks }})
                    </p>
                    <p>Books: {{ result.listOfBooks ? result.listOfBooks.join(', ') : 'No books available' }}</p>
                    <img :src="result.image" alt="Author Image" width="100">
                </div>
                <div v-else-if="result.type === 'book'">
                    <p><strong>Book:</strong> {{ result.title }}</p>
                    <p>Author: {{ result.author }}</p>
                    <p>Published: {{ new Date(result.publicationDate).toLocaleDateString() }}</p>
                    <img :src="result.coverPicture" alt="Book Cover" width="100">
                </div>
            </div>
        </div>
        <div v-else>
            <!-- normal display -->
            <div v-if="view === 'authors'">
                <div v-for="author in authors" :key="author._id">
                    <p><strong>{{ author.name }}</strong> (Age: {{ author.age }}, Books: {{ author.numberOfBooks }})</p>
                    <p>Books: {{ author.listOfBooks ? author.listOfBooks.join(', ') : 'No books available' }}</p>
                    <img :src="author.image" alt="Author Image" width="100">
                    <button @click="editAuthor(author._id, newAuthorData)">Edit</button>
                </div>
            </div>
            <div v-if="view === 'books'">
                <div v-for="book in books" :key="book._id">
                    <p><strong>{{ book.title }}</strong></p>
                    <p>Author: {{ book.authorId ? book.authorId.name : 'Unknown' }}</p>
                    <p>Published: {{ book.publicationDate ? new Date(book.publicationDate).toLocaleDateString() : 'Unknown'
                    }}
                    </p>
                    <p>Blurb: <i>{{ book.blurblurb }}</i></p>
                    <img :src="book.coverPicture" alt="Book Cover" width="100">
                    <button @click="editBook(book._id, newBookData)">Edit</button>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            errorMessage: null,
            view: 'books',
            authors: [],
            books: [],
            searchTerm: '',
            filteredAuthors: [],
            filteredBooks: [],
            showBookModal: false,
            showAuthorModal: false,
            selectedAuthorId: null,
            selectedBookAuthorId: null,
            searchResults: [],
            newBook: {
                title: '',
                author: '',
                blurb: '',
                publicationDate: '',
                coverPicture: null,
            },
            newAuthor: {
                name: '',
                age: null,
                numberOfBooks: null,
                listOfBooks: '',
                description: '',
                image: null,
            },
        };
    },
    async mounted() {
        this.loadAuthors();
        this.loadBooks();
    },
    methods: {
        async fetchData(endpoint) {
            const response = await fetch(`http://localhost:4000/${endpoint}`);
            if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`);
            return await response.json();
        },

        async loadAuthors() {
            this.loadResource('authors', 'Failed to fetch authors');
        },

        async loadBooks() {
            this.loadResource('books', 'Failed to fetch books');
        },

        async loadResource(resource, errorMessage) {
            try {
                this[resource] = await this.fetchData(resource);
            } catch (error) {
                this.errorMessage = errorMessage;
            }
        },
        reformatDate(date) {
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        },

        isValidDate(date) {
            console.log("Date to validate:", date);
            const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
            return datePattern.test(date);
        },

        isValidAge(age) {
            return !isNaN(age) && age > 0;
        },

        async addItem(resource, newItem, errorMessage, modalState) {
            try {
                const formData = new FormData();
                for (const [key, value] of Object.entries(newItem)) {
                    formData.append(key, value);
                }

                const response = await fetch(`http://localhost:4000/${resource}`, {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    this[resource].push(data);
                    this[modalState] = false;
                } else {
                    const errorData = await response.json();
                    this.errorMessage = errorData.message || errorMessage;
                }
            } catch (error) {
                this.errorMessage = error.message || errorMessage;
            }
        },


        async addBook() {
            if (!this.newBook.title || !this.newBook.author || !this.newBook.publicationDate) {
                this.errorMessage = "Please fill in all required fields for the book.";
                return;
            }
            const reformattedDate = this.reformatDate(this.newBook.publicationDate);
            console.log("Reformatted Date:", reformattedDate);
            console.log("Publication Date:", this.newBook.publicationDate);
            if (!this.isValidDate(reformattedDate)) {
                this.errorMessage = "Please provide a date in DD/MM/YYYY format.";
                return;
            }
            // Convert the date to YYYY-MM-DD format
            const [day, month, year] = reformattedDate.split('/');
            const backendDate = `${year}-${month}-${day}`;

            const formData = new FormData();
            formData.append('title', this.newBook.title);
            formData.append('authorName', this.newBook.author);
            formData.append('blurb', this.newBook.blurb);
            formData.append('publicationDate', backendDate);

            await this.addItem('books', formData, 'Something went wrong while adding the book.', 'showBookModal');

            this.newBook = {
                title: '',
                author: '',
                blurb: '',
                publicationDate: '',
                coverPicture: null,
            };
        },


        async editBook(bookId, newBookData) {
            try {
                const response = await fetch(`http://localhost:4000/books/${bookId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newBookData),
                });

                if (response.ok) {
                    // Refresh the book list after successful update
                    await this.loadBooks();
                } else {
                    this.errorMessage = "Something went wrong while editing the book.";
                }
            } catch (error) {
                this.errorMessage = "Something went wrong while editing the book.";
            }
        },

        async editAuthor(authorId, newAuthorData) {
            try {
                const response = await fetch(`http://localhost:4000/authors/${authorId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newAuthorData),
                });

                if (response.ok) {
                    // Refresh the author list after successful update
                    await this.loadAuthors();
                } else {
                    this.errorMessage = "Something went wrong while editing the author.";
                }
            } catch (error) {
                this.errorMessage = "Something went wrong while editing the author.";
            }
        },


        async addAuthor() {
            if (!this.newAuthor.name || !this.newAuthor.age) {
                this.errorMessage = "Please fill in all required fields for the author.";
                return;
            }

            if (!this.isValidAge(this.newAuthor.age)) {
                this.errorMessage = "Please provide a valid age.";
                return;
            }

            this.addItem('authors', this.newAuthor, 'Something went wrong while adding the author.', 'showAuthorModal');
        },

        onFileChange(event, target) {
            this[target] = event.target.files[0];
        },

        async search() {
            try {
                const response = await fetch('http://localhost:4000/search?q=' + this.searchTerm);
                if (response.ok) {
                    this.searchResults = await response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                this.errorMessage = 'Failed to search';
            }
        },

        onBookCoverChange(event) {
            this.onFileChange(event, 'newBook.coverPicture');
        },

        onAuthorImageChange(event) {
            this.onFileChange(event, 'newAuthor.image');
        },
    },

    computed: {
        filteredItems() {
            if (this.viewState === 'books') {
                return this.books.filter(book => book.name.includes(this.searchQuery))
            } else if (this.viewState === 'authors') {
                return this.authors.filter(author => author.name.includes(this.searchQuery))
            }
            return []
        }
    }

};
</script>


  
<style scoped>
.library-container {
    width: 100%;
    min-height: 400px;
    background-color: #f2f2f2;
    padding: 20px;
}

.error-message {
    color: red;
    font-weight: bold;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 50%;
}
</style>
  