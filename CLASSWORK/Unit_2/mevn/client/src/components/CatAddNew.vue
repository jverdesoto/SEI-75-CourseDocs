<template>
    <h1>Add New Cat</h1>
    <input type="text" v-model="cat.name" name ="name" placeholder="Cat Name"><br>
    <input type="text" v-model="cat.age" name="age" placeholder="Cat Age">
    <button v-on:click="addCat">Add New Cat</button>
</template>

<script>

export default {
    // Define the name of the Vue.js component.
    name: "AddCatForm",

    // Define the initial data for the component.
    data: () => ({
        error: '', // Used for storing error messages (not currently used).
        cat: {
            name: '', // Initialize the 'name' property of 'cat' as an empty string.
            age: ''   // Initialize the 'age' property of 'cat' as an empty string.
        }
    }),

    methods: {
        // This method is called when the "Add New Cat" button is clicked.
        addCat: function () {
            // Log a message with the cat's name and age to the console.
            console.log(`New Cat ${this.cat.name} - ${this.cat.age}`);
            
            // Make an HTTP POST request to add a new cat.
            fetch('http://localhost:4000/cats/add', {
                method: "POST", // Specify that this is a POST request.
                headers: {
                    "Content-Type": "application/json" // Set the request content type to JSON.
                },
                body: JSON.stringify({
                    // Convert the 'cat' object to JSON and send it as the request body.
                    name: this.cat.name,
                    age: this.cat.age
                })
            })
            .then(res => console.log(res.status)); // Log the HTTP response status code.
        }
    }
}

</script> 