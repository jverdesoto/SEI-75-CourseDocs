<template>
    <h1>Add Cat Form</h1>
    <p><input type="text" name="name" v-model="cat.name" placeholder="Cat Name"></p>
    <p><input type="text" name="age" v-model="cat.age" placeholder="Cat Age"></p>
    <p><button v-on:click="addCat"><router-link :to="'/saveCat'" >Save</router-link> </button></p>
    <!-- <router-link :to="'/saveCat'" >Save</router-link> -->
</template>

<script>
   const API_URL = 'http://localhost:4000/cats/saveCat'

export default {
    name: 'AddCatView',
    data: () => ({
        error: '',
        cat: {
            name:'',
            age:''
        }
    }),

    mounted() {
        // fetch(API_URL)
        // .then(response => response.json())
        // .then(result => {
            
        // })
    },
    methods: {
        addCat:function(){
            console.log(`New Cat: ${this.cat.name} : ${this.cat.age}`);
            fetch(API_URL,{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(this.cat)
            })
            .then(res => console.log(res.status))
        }
    }
}
</script>
<style>
.listView{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2px;
}

.card{
    border: 1px solid aqua;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 10px;
}

.row{
    background-color: transparent;
    display: flex;
    gap: 2px;
}
</style>

<!-- <template>
    <h1>Add Cat Form</h1>
        <input type="text" name="name" placeholder="Cat Name"><input>
        <input type="text" name="age" placeholder="Cat Age"/>
        <button><router-link :to="'/saveCat'" >Save</router-link></button>
</template>

<script>
   const API_URL = 'http://localhost:4000/'

    export default {
        name: 'AddCatView',
        data: () => ({
            error: '',
            cats: []
        }),

        mounted() {
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.cats = result
            })
        },
        methods: {
            submitCat(){

            }
        }
    } -->
