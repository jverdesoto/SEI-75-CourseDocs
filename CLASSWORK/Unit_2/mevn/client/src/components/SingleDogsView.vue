<template>
    <div class="single-container">
        <input type="text" v-model="searchQuery" placeholder="Search for a dog...">
        <router-link to="/dogs">
            <span class="single-home-icon">🏠</span> Home
        </router-link>
        <router-link to="/cat-facts">
            <button>Go to Cat Facts</button>
        </router-link>
        <button class="single-nav-button" @click="goToPrevDog">
            <i class="fas fa-arrow-left"></i> Previous
        </button>
        <button class="single-nav-button" @click="goToNextDog">
            Next <i class="fas fa-arrow-right"></i>
        </button>
        <div class="single-dog-card">
            <img v-if="dog.img" :src="require(`@/assets/${dog.img}`)" alt="Dog Image" class="single-dog-image">
            <div class="single-dog-info">
                <h1>{{ dog.name }}</h1>
                <p>{{ dog.breed }}</p>
                <p>{{ dog.age }} years old</p>
                <p>Description: {{ dog.description }}</p>
                <div class="single-button-bar">
                    <span class="single-home-icon">🏳️‍🌈</span>
                    <button @click="toggleGoodBad">{{ dog.isGood ? 'Good Boy' : 'Bad Boy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script>
export default {
    data() {
        return {
            dog: {},
            dogs: [],
            searchQuery: ''
        };
    },
    mounted() {
        const id = this.$route.params.id;
        fetch(`http://localhost:4000/dogs/${id}`)
            .then(response => response.json())
            .then(data => {
                this.dog = data;
            });
        this.fetchAllDogs();
        this.fetchDog();
    },
    methods: {
        fetchAllDogs() {
            fetch(`http://localhost:4000/dogs`)
                .then(response => response.json())
                .then(data => {
                    this.dogs = data;
                });
        },
        fetchDog() {
            const id = this.$route.params.id;
            fetch(`http://localhost:4000/dogs/${id}`)
                .then(response => response.json())
                .then(data => {
                    this.dog = data;
                });
        },
        goToPrevDog() {
            const currentIndex = this.filteredDogs.findIndex(d => d.id === this.dog.id);
            if (currentIndex > 0) {
                const prevDog = this.filteredDogs[currentIndex - 1];
                this.$router.push(`/dogs/${prevDog.id}`);
            }
        },
        goToNextDog() {
            const currentIndex = this.filteredDogs.findIndex(d => d.id === this.dog.id);
            if (currentIndex < this.filteredDogs.length - 1) {
                const nextDog = this.filteredDogs[currentIndex + 1];
                this.$router.push(`/dogs/${nextDog.id}`);
            }
        },
        toggleGoodBad() {
            this.dog.isGood = !this.dog.isGood;
        }
    },
    computed: {
        filteredDogs() {
            const lowerCaseQuery = this.searchQuery.toLowerCase();
            return this.dogs.filter(dog => {
                return dog.name.toLowerCase().includes(lowerCaseQuery) ||
                    dog.breed.toLowerCase().includes(lowerCaseQuery);
            });
        }
    },
    watch: {
        '$route.params.id': 'fetchDog'
    }
};

</script>

<style>
/* SingleDogsView */
.single-container {
    text-align: center;
    margin: 20px;
    padding: 20px;
    /* Adds padding to create a card-like appearance */
    background: rgba(255, 182, 193, 0.2);
    /* Transparent pink background for the card */
    border-radius: 15px;
    /* Rounded corners for the card */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Shadow for the card */
    position: relative;
    /* To position arrows and dog list */
}

.single-dog-card {
    width: 70%;
    /* Adjust the width to your preference */
    margin: 20px auto;
    /* Center the card horizontally */
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    background: linear-gradient(to bottom right, #ff9a9e, #fad0c4);
    display: flex;
    /* Make it flex to arrange image and info side by side */
}

.single-dog-image {
    width: 50%;
    /* Adjust image width within the card */
    height: auto;
    /* Maintain aspect ratio */
    object-fit: cover;
    border-radius: 8px 0 0 8px;
    /* Round corners only on one side */
}

.single-dog-info {
    flex: 1;
    /* Expand to fill available space */
    padding: 1rem;
    text-align: left;
    /* Align text to the left */
    background: linear-gradient(to top left, #fbc2eb, #a6c1ee);
    color: white;
}

.single-button-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

button {
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 2rem;
    color: #FF1493;
}

.single-home-icon {
    font-size: 1.5rem;
    margin-right: 10px;
    color: #FF1493;
}

.single-good-boy {
    color: #00FF00;
}

.single-bad-boy {
    color: #FF0000;
}

/* Search box styles */
input[type="text"] {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


/* Arrows for navigation */
.single-arrow {
    font-size: 2rem;
    color: #FF1493;
    cursor: pointer;
}

.single-arrow-left {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
}

.single-arrow-right {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}
</style>
