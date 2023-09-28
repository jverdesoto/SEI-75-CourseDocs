<template>
    <div>
        <img src="@/assets/walking.gif" alt="Walking Cat" id="walking-cat">
        <div class="cat-card">
            <router-link to="/">
                <button>Home</button>
            </router-link>
            <img src="@/assets/lazyCat.gif" alt="Cat Left" class="catL">
            <img src="@/assets/lazyCat.gif" alt="Cat Right" class="catR">
            <div id="cat-box">
                <button @click="fetchCatFact">Get Random Cat Fact</button>
            </div>
            <p>{{ catFact }}</p>
        </div>
    </div>
</template>

   
<script>
const API_URL = "https://cat-fact.herokuapp.com/facts";

export default {
    name: 'CatFacts',
    data() {
        return {
            error: '',
            catFact: {}
        }
    },
    mounted() {
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                const randomIndex = Math.floor(Math.random() * result.length);
                this.catFact = result[randomIndex];
            })
            .catch(error => {
                this.error = "Failed to fetch cat facts";
                console.error(error);
            });
    },

    // methods: {
    //     async fetchCatFact() {
    //         const res = await fetch('https://cat-fact.herokuapp.com/facts');
    //         const data = await res.json();
    //         const randomIndex = Math.floor(Math.random() * data.length);
    //         this.catFact = data[randomIndex].text;
    //     }
    // }

}
</script>
  
<style scoped>
.cat-card {
    /* Making it appear like a card */
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    max-width: 400px;
    margin: auto;
    position: relative;
}


#cat-facts-container {
    position: relative;
    z-index: 2;
}

#cat-box {
    position: relative;
    text-align: center;
    border: 2px solid #333;
    padding: 20px;
    margin: 20px;
}

.catL,
.catR {
    position: absolute;
    width: 50px;
    height: auto;
    top: 18px;
}

.catL {
    left: 20px;
    transform: scaleX(-1);
    /* mirror image */
}

.catR {
    right: 20px;
}

button {
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background-color: #0077A2;
    transition: background-color 0.3s ease;
}


#walking-cat {
    position: absolute;
    bottom: 0;
    animation: walkCat 20s linear infinite;
}

@keyframes walkCat {
    0% {
        right: -100px;
    }

    100% {
        right: 100vw;
    }
}
</style>
