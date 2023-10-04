<!-- <template>
<div>
    <h2>{{ authorName }}'s Books</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'AuthorBooks',
    data() {
        return {
        error: '',
        books: {},
        authorName: ''
    };
},

    mounted() {
        fetch(`http://localhost:4000/library/authors/${authorName}`)
            .then(response => response.json())
            .then(result => {
                this.books = result
            })
    },

}

</script> -->