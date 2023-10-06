<template>
    <h1>Add New Cat</h1>
    <p><input type="text" v-model="cat.name" name="name" placeholder="Cat Name"></p>
    <p><input type="text" v-model="cat.age" name="age" placeholder="Cat Age"></p>
    <p><button v-on:click="addCat">Add New Cat</button></p>

</template>

<script>
export default {
    name: 'CatAddNew',
    data: () => ({
        error: '',
        cat: {
            name: '',
            age: ''
        }
    }),
    methods: {
        addCat: function () { //need to add an object when using post
            console.log(`New Cat ${this.cat.name} - ${this.cat.age}`)
            fetch('http://localhost:4000/cats/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.cat.name,
                    age: this.cat.age
                })
            })
            .then(res => console.log(res.status))
        }
    }
}
</script>