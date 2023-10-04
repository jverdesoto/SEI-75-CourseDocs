<template> 
    <h1>Please Submit your Fav Feline</h1>
    <input type="text" v-model="cat.name" id="name" name="name" placeholder="Cat Name...."><br>
    <input type="text" v-model="cat.age" id="age" name="age" placeholder="Cat Age....."><br><br>
    <input type="submit" id="submitButton" value="Send to CatDB" v-on:click="submitCat">
</template>

<script>


export default {
    name: 'CatSubmitter',
    data: () => ({
        error: '',
        cat: {
            name: '',
            age: ''
        }
    }),

    methods: {
        submitCat: function (e) {
            e.preventDefault()
            fetch('http://localhost:4000/cats/add', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name:  this.cat.name,
                    age: this.cat.age
                })
            })
            .then(res => console.log(res.status))
        }
    }
}
</script>