<template>
    <div class="dogs-view-container">
        <router-link to="/cat-facts">
            <button>Go to Cat Facts</button>
        </router-link>
        <input type="text" v-model="searchQuery" placeholder="Search for a dog...">
        <h1 class="dogs-view-section-title">Good Boys List</h1>
        <div class="dogs-view-card-grid">
            <div class="dogs-view-card" v-for="dog in goodBoys" :key="dog.id">
                <router-link :to="`/dogs/${dog.id}`" class="dogs-view-link">
                    <img :src="require(`@/assets/${dog.img}`)" alt="Dog Image" class="dogs-view-image">
                    <div class="dogs-view-info">
                        <h3>{{ dog.name }}</h3>
                        <p>{{ dog.breed }}</p>
                        <p>{{ dog.age }} years old</p>
                    </div>
                </router-link>
            </div>
        </div>
        <h1 class="dogs-view-section-title">Bad Boys</h1>
        <div class="dogs-view-bad-boy-grid">
            <div class="dogs-view-card" v-for="dog in badBoys" :key="dog.id">
                <img :src="require(`@/assets/${dog.img}`)" alt="Dog Image" class="dogs-view-image">
                <div class="dogs-view-info">
                    <h3>{{ dog.name }}</h3>
                    <p>Age: {{ dog.age }}</p>
                    <p>Breed: {{ dog.breed }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const API_URL = "http://localhost:4000/dogs"

export default {
    name: 'DogsView',
    data: () => ({
        error: '',
        dogs: [],
        searchQuery: ''
    }),
    mounted() {
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.dogs = result
            })
    },
    computed: {
        goodBoys() {
            return this.filteredDogs.filter(dog => dog.name !== 'Ugly');
        },
        badBoys() {
            return this.filteredDogs.filter(dog => dog.name === 'Ugly');
        },
        filteredDogs() {
            return this.dogs.filter(dog => {
                const lowerCaseQuery = this.searchQuery.toLowerCase();
                return (
                    dog.name.toLowerCase().includes(lowerCaseQuery) ||
                    dog.breed.toLowerCase().includes(lowerCaseQuery) ||
                    (dog.name === 'Ugly' && lowerCaseQuery === 'bad boy') ||
                    (dog.name !== 'Ugly' && lowerCaseQuery === 'good boy')
                );
            });
        }
    }
}
</script>

<style>
.dogs-view-container {
    max-width: 100%;
    margin: auto;
    padding: 20px;
    background: rgb(244, 199, 251);
    min-height: 100vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dogs-view-section-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #333;
}

.dogs-view-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-items: center;
    align-items: center;
}

.dogs-view-bad-boy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    justify-items: center;
    align-items: center;
}

.dogs-view-card {
    height: auto;
    padding-bottom: 2rem;
    position: relative;
    overflow: hidden;
    background: pink;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
    border-radius: 12px;
    flex-grow: 1;
    min-width: 400px;
    max-width: 800px;
}

.dogs-view-card:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.dogs-view-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin: auto;
    padding: 5px;
    display: block;
    transition: transform 0.3s ease-in-out;
}

.dogs-view-image:hover {
    transform: rotate(360deg);
}

.dogs-view-info {
    flex-grow: 1;
    background: linear-gradient(120deg, #bd377d 0%, #4a90e2 100%);
    width: 100%;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

/* To remove the hyperlink underline */
.dogs-view-link {
    text-decoration: none;
    align-items: center;
    justify-content: center;
}
</style>
