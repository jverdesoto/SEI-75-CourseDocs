<template>
    <h1>Add new cat</h1>    
    <p><input v-model="cat.name" type="text" placeholder="Cat Name"><br></p>
    <p><input v-model="cat.age" type="text" name="age" placeholder="Cat age"></p>
    <p><button v-on:click="addCat">Add new Cat</button></p>
</template>

<script>

export default {
    name: 'CatAddNew',
    data: () => ({
        error: '',
        cat: {
            name: '',
            age:''
        }
    }),
    methods: {
        addCat: function () {
            console.log(`New cat ${this.cat.name} - ${this.cat.age}`);
            fetch('http://localhost:4002/cat/add', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
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