<template>
    <h1>Cat Form</h1>
    <p><label for="name">First name:</label></p>
    <p><input v-model="newCat.name" name="name" placeholder="Your cat's name" /></p>
    <p><label for="age">Age:</label></p>
    <p><input v-model="newCat.age" name="age" placeholder="Your cat's age" /></p>
    <p><button @click="catSubmit">Add new cat</button></p>
</template>

<script>
    export default {
        name: 'CatForm',
        data: () => ({
            error: '',
            newCat: {
                name: '',
                age: ''
            }
        }),
        methods: {
            catSubmit: function () {
                console.log(`New Cat: ${this.newCat.name}, ${this.newCat.age}`)
                fetch('http://localhost:4000/cats/add', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: this.newCat.name,
                        age: this.newCat.age
                    })
                })
                .then(res => console.log(res.status))
            }
        }
    }
</script>