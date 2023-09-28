  <template>
  <div id="main">
    <div v-for="dog in dogs" :key="dog._id" class="dog-card">
      <h3>{{ dog.name }}</h3>
      <p>Age: {{ dog.age }}</p>
      <p>Breed: {{ dog.breed }}</p>
      <p> <router-link :to="'/dogs/' + dog.id" >View Dog</router-link> </p>

    </div>
  </div>
</template>

<script>
    const API_URL = 'http://localhost:4000/dogs'
    // import { useRoute } from 'vue-router'

    export default {
        name: 'dogsView',
        data: () => ({
            error: '',
            dogs: []
        }),

        mounted() {
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.dogs = result
            })
        },
        methods: {}
    }
</script>

<style>

body {
 margin: 0;
padding: 0;
font-family: Arial, sans-serif;
background-color: #f0f0f0;
display: flex;
flex-wrap: wrap;
justify-content: center;
}

/* Style for each card */
div.dog-card {
width: 250px;
background-color: #fff;
border: 1px solid #ccc;
border-radius: 5px;
margin: 10px;
padding: 20px;
text-align: center;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
color: green;
}

div#main {
    display: flex;
    flex-direction: column;
    justify-content:center
}

h3 {
    font-size: 40px;
    color: darkgreen;
}

p {
    font-size: 20px;
}

</style>