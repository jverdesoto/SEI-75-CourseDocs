<template> 
    <section id="inputForm">
        <h3>Add Your Fav-sy Author to Our Database</h3> <br>
        <input type="text" name="authorName" id="authorName" placeholder="Author's Name" v-model="author.name">
        <input type="text" name="bookTitle" placeholder="Book Title" id="bookTitle" v-model="book.title">
        <input type="date" name="publishingDate" id="publishingDate" v-model="book.publishingDate"><br>
        <input type="submit" id="submitButton" value="Submit" v-on:click="submitAuthorAndBook()"> 
    </section>
</template>

<script>

export default {
        name: 'LibraryForm',
        data: () => ({
            error: '',
            author: {
                name: '',
            },
            book: {
                title: '',
                publishingDate: Date,
            }
        }),
        methods: {
            submitAuthorAndBook: async function () {
               await fetch('http://localhost:4000/library/book/add', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title:  this.book.title,
                        publishingDate: this.book.publishingDate,
                        author: this.author.name
                    })
                })
                .then(res => console.log(res.status));
            }
        }
    }        


</script>

