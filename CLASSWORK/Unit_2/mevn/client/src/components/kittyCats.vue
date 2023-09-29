<template>
    <h1>Cat Farm</h1>
    <h3>Drop a new cat here</h3>
<div class="input-group">
    <span class="input-group-text">Cat name and age</span>
    <input type="text" aria-label="Cat name" class="form-control">
    <input type="number" aria-label="Cat age" class="form-control">
    <button @click="submitData()">Submit</button>
  </div>

</template>

<script>
    const API_URL = 'http://localhost:4000/cats'

    export default {
        name: 'kittyCats',
        data: () => ({
            error: '',
            kittyCats: [],
            Name: '',
            Age: 0
        }),

        mounted() {
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.kitty = result
            })
        },
        methods: {
            submitData() {
                const newCat = {
                    name: this.Name,
                    age: this.Age
                }
            }
        }
    }
</script>

<style>

</style>