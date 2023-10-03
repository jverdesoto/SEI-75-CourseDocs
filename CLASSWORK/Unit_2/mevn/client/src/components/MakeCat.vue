<!-- <template>
    <h1>Make your own cat</h1>
    <input type="text" name="name" placeholder="name">
    <input type="text" name="age" placeholder="age">
    <button @click="handleClick">Submit</button>
    <h2>All Cats Below</h2>
</template>

<script>
import { useRoute } from 'vue-router'
const API_URL = 'http://localhost:4000/cats'

export default {
    name: 'MakeCats',
    data: () => ({
        error: '',
        cat: {},
    }),
    mounted() {
        const route = useRoute()
        console.warn(route)
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.cat = result
                console.log(result);
            })
    },
    methods: {
        handleClick(){
            app.post('/cats', (req,res) => {
                res.json(input.name)
            })
        }
    }
}

</script> -->