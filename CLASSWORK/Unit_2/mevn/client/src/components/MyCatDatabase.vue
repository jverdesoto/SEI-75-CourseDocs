<template>
    <h3>My Cat Database</h3>

        <p><input type="text" name="name" v-model="cat.name" placeholder="Cat name"></p>

        <p><input type="text" name="age" v-model="cat.age" placeholder="Cat age"></p>

        <p><button v-on:click="addCat">Add new cat</button></p>

</template>

<script>

export default { // the name of your component
name: 'MyCatDatabase',
data: () => ({ // any data you might need to use from you js function into your front end
        error: '',
        cat: {
            name: '',
            age: ''
        } // empty array to be filled in with data from API. NB it's a variabe in an object, so acts as a key (i.e. doesn't neet a let or const)
    }),

    methods: {
        addCat: function () {
            console.log(`New cat ${this.cat.name} - ${this.cat.age}`);
            fetch('http://localhost:4000/add-cat', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name: this.cat.name,
                    age: this.cat.age
                })
            })
            .then(res => console.log(res.status))
            this.cat = { name: '', age: null }; 
        }
}}

//         //the 'then' says wait for the previous action to finish, THEN move onto the next one
//         .then(response => response.json()) //put the API in a variable response, then put it into a json format
//         .then(result => {  // this puts all the data from the API into the 'facts' array
//             this.facts = result
//         })
//     },

//     methods: {
//     async submitForm() { //The async keyword allows you to use the await keyword inside it, which is useful for handling promises in a more readable manner.
//             const response = await fetch('http://localhost:4000/add-cat', { //Makes a POST HTTP request to 'http://localhost:4000/add-cat'. Uses the browser's native fetch API to send a request to the provided URL.
//             method: 'POST', //Specifies that the HTTP request method is POST.
//             headers: { //This sets the headers for the HTTP request. In this case, it specifies that the content type of the request body is JSON.
//                 'Content-Type': 'application/json',
//             },
//     })
//         const data = await response.json(); // not neccesary. Once the fetch request is done, this line parses the response body as JSON. It then waits for the parsing to be complete before moving on.
//         console.log(data.message); // not neccesary. Logs the message field from the parsed JSON response to the console.
//         this.cat = { name: '', age: null }; //Resets the cat data to its initial state with empty name and null age.

// }

</script>

<style>
h3 {
font-size:xx-large;
}
</style>


