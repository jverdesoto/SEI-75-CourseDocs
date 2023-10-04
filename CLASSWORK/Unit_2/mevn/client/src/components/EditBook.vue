<template> 
    <section id="inputForm">
        <h3>Edit your book here matey</h3> <br>
        <input type="text" name="authorName" id="authorName" placeholder="Author's Name" v-model="book.author" disabled>
        <input type="text" name="bookTitle" placeholder="Book Title" id="bookTitle" v-model="book.title">
        <input type="date" name="publishingDate" id="publishingDate" v-model="book.publishingDate"><br>
        <input type="submit" id="submitButton" value="Submit" v-on:click="editBook"> 
    </section>
</template>

<script>
import { useRoute } from 'vue-router';


export default {
        name: 'librayEditBook',
        data: () => ({
            error: '',
            book: {
                id: '',
                title: '',
                author: '',
                publishingDate: Date,
            }
        }),
        
        mounted () {
            const route = useRoute()
            fetch (`http://localhost:4000/library/book/${route.params.id}`)
            .then (result => result.json())
            .then (data => {
                this.book.id = route.params.id
                this.book.title = data.title
                this.book.author = data.author.name
                this.book.publishingDate = data.publishingDate
            })
        },

        methods: {
            editBook: function () {
                fetch(`http://localhost:4000/library/book/${this.book.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title:  this.book.title,
                        publishingDate: this.book.publishingDate,
                    })
                })
                .then(res => {
                    console.log(res.status)
                    this.$router.replace({path: `/library/book/${this.book.id}`})
                });
            }   
        }
    }        


</script>

