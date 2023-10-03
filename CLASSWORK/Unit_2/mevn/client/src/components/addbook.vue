<template>
    <h1>ADD A NEW BOOK</h1>
    <input type="text" v-model="book.bookTitle" name ="bookTitle" placeholder="Book Title">
    <input type="text"  v-model="book.publishingDate" name ="publishingDate" placeholder="Date Published">
    <input type="text"  v-model="book.authorName" name ="authorName" placeholder="Author Name">
    <button v-on:click="newBook">Add New Book</button>
</template>

<script>

export default {
    // Define the name of the Vue.js component.
    name: "SubmitNewBook",

    // Define the initial data for the component.
    data: () => ({
        error: '', // Used for storing error messages (not currently used).
        book: {
            bookTitle: '', // Initialize the 'name' property of 'cat' as an empty string.
            publishingDate: '',   // Initialize the 'age' property of 'cat' as an empty string.
            authorName: '' // 
        }
    }),

    methods: {
        // This method is called when the "Add New Book" button is clicked.
        newBook: function () {
            // Log a message with the books details to the console.
            console.log(`New book ${this.book.bookTitle} - ${this.book.publishingDate}-${this.book.authorName}`);
            
            // Make an HTTP POST request to add a new book.
            fetch('http://localhost:4000/books/add', {
                method: "POST", // Specify that this is a POST request.
                headers: {
                    "Content-Type": "application/json" // Set the request content type to JSON.
                },
                body: JSON.stringify({
                    // Convert the 'book' object to JSON and send it as the request body.
                  
                    bookTitle: this.book.bookTitle, // Initialize the 'name' property of 'cat' as an empty string.
                    publishingDate: this.book.publishingDate,   // Initialize the 'age' property of 'cat' as an empty string.
                    authorName: this.book.authorName // 
                })
            })
            .then(res => {
                // Log the HTTP response status code.
                console.log(res.status);

                // Reset the input fields by clearing the data properties.
                this.book.bookTitle = '';
                this.book.publishingDate = '';
                this.book.authorName = '';
            } )
        }
    }
}

</script>