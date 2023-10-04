<!-- <template> 
    <h1> {{books.title}} </h1>
</template>


<script>
import { useRoute } from 'vue-router'
    const API_URL = 'http://localhost:4000/library/book'

export default { //exports the entire vue object to be used
    name: 'JustOneBook', // name of hte bue component 
    data: () => ({
        error: '',
        books: [],
        author: ''
    }),

    mounted() { // this is a vue thing that is called once is the vue object is mounted or loaded by the app
        const route = useRoute()
        console.warn(route.params)
        fetch(`${API_URL}/${route.params.id}`)
        .then(response => response.json())
        .then(result => {
            this.books = result.bookData
            this.author = result.booksAuthor // this basically populated the exporting data array with the value from the api 
        })
    },
    methods: {}
}
</script> -->