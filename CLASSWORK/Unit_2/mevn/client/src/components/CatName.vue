<template>
    <div>
        <h1>Cat Page</h1>
        <input type= "text" v-model="inputvaluename"  name="catname" placeholder="Name">
        <input type= "text" v-model="inputvalueage"  name="catage" placeholder="Age">
        <button @click="handleClick">Submit</button>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
const API_URL = 'http://localhost:4000/cats'

export default {
    name: 'CatPets',
    data: () => ({
        error: '',
        catNameAge: [],
        catFormData: {Name: '' , Age: null}
    }),
    mounted() {
        const route = useRoute()
        console.warn(route)
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.catNameAge = result
                console.log(result);
            })
        },
        methods: { 
           
         handleClick(){
             this.catFormData.Name = this.inputvaluename
             this.catFormData.Age= this.inputvalueage
             fetch(API_URL,{
                method: 'POST',
                body: this.catFormData
             })

    }
}
}
    </script>