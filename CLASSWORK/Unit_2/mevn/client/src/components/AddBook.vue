<template>
    <div>
        <h1>Add a New Book</h1>
        <form @submit.prevent="addBook">
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="newBook.title">
            </div>
            <div>
                <label for="author">Author:</label>
                <input type="text" id="author" v-model="newBook.author">
            </div>
            <div>
                <label for="publicationDate">Publication Date (DD/MM/YYYY):</label>
                <input type="text" id="publicationDate" v-model="newBook.publicationDate">
            </div>
            <div>
                <label for="blurb">Blurb:</label>
                <textarea id="blurb" v-model="newBook.blurb"></textarea>
            </div>
            <div>
                <label for="coverPicture">Cover Picture:</label>
                <input type="file" id="coverPicture" @change="onFileChange">
            </div>
            <button type="submit">Add Book</button>
        </form>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        newBook: {
          title: '',
          author: '',
          blurb: '',
          publicationDate: '',
          coverPicture: null,
        },
      };
    },
    methods: {
      async addBook() {
        // Create FormData to handle file upload
        const formData = new FormData();
        formData.append('title', this.newBook.title);
        formData.append('author', this.newBook.author);
        formData.append('blurb', this.newBook.blurb);
        formData.append('publicationDate', this.newBook.publicationDate);
        if (this.newBook.coverPicture) {
          formData.append('coverPicture', this.newBook.coverPicture);
        }
  
        try {
          // Send POST request to add the new book
          const response = await fetch('http://localhost:4000/books', {
            method: 'POST',
            body: formData,
          });
  
          if (response.ok) {
            const data = await response.json();
            console.log('Book added:', data);
            // Reset the form
            this.newBook = {
              title: '',
              author: '',
              blurb: '',
              publicationDate: '',
              coverPicture: null,
            };
          } else {
            console.error('Failed to add book');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      },
      onFileChange(event) {
        this.newBook.coverPicture = event.target.files[0];
      },
    },
  };
  </script>
  