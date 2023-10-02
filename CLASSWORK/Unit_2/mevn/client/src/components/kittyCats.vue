<template>
    <h1>Cat Farm</h1>
    <h3>Drop a new cat here</h3>
<div class="input-group">
    <input type="text" v-model="cat.name" placeholder="Cat name" class="form-control">
    <input type="number" v-model="cat.age" placeholder="Cat age" class="form-control">
    <button @click="addKitty">Submit</button>
  </div>

</template>

<script>
    const API_URL = 'http://localhost:4000/cats'

    export default {
        name: 'kittyCats',
        data: () => ({
            error: '',
            cat: {
                name: '',
                age: ''
            }
        }),

        mounted() {
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.kitty = result
            })
        },
        methods: {
            addKitty: function() {
                alert(`New cat ${this.cat.name} - ${this.cat.age}`);
                fetch(`http://localhost:4000/kitty-cats`, {
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

<style>
.input-group { 
    margin: 0 10px;
}

</style>