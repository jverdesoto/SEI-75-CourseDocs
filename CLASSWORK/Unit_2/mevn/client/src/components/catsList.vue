<template>
    <div class="cat-registration-container">
        <div class="cat-registration-header">
            <h1>Register your cat!</h1>
            <p>we keep a collection of all the cutest cats out there - register yours below:</p>
        </div>
        <div class="cat-registration-box">
            <label for="catName" class="inputArea">Name of your cat:</label>
            <input type="text" v-model="catFormData.name" name="catName" id="catName" placeholder="your cat's name here"
                class="inputArea">
            <label for="catAge" class="inputArea">Age of your cat:</label>
            <input type="text" v-model="catFormData.age" name="catAge" id="catAge" placeholder="your cat's age here"
                class="inputArea">
            <button @click="addCat(e)">Register my cat!</button>
        </div>
    </div>

    <div class="cats-list-container">
        <table>
            <h1>Registered Cats so Far</h1>
            <tbody v-for="cat in cats" :key="cat.id">
                <p>{{ cat.name }} - Age: {{ cat.age }}</p>
            </tbody>
        </table>
    </div>
</template>
<script>


const DATA_URL = "http://localhost:4000/cats"

export default {
    name: 'catsList',
    data: () => ({
        error: 'no data to display',
        cats: [],
        catFormData: {
            name: '',
            age: null
        }
    }),
    mounted() {
        fetch(DATA_URL)
            .then(response => response.json())
            .then(result => {
                this.cats = result
            })
    },
    methods: {
        addCat() {
            fetch(DATA_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.catFormData.name,
                    age: this.catFormData.age
                })
            })
            .then(response => response.json())
            .then(result =>{
                console.log(result)
            })
        }
    }
}
</script>
<style>
.cat-registration-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45vh;
}

.cat-registration-header {
    margin: 20px 0;
    text-align: center;
}

.cat-registration-box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: aquamarine;
    width: 50%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.cat-registration-box input {
    width: 100%;
    height: 40px;
    padding: 5px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.cat-registration-box button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.cats-list-container {
    margin: 20px;
}

.cats-list-container p {
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table th,
table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
}

table th {
    background-color: #f2f2f2;
    font-weight: bold;
}
</style>