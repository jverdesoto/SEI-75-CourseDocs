<template>
    <!-- <form action="" method="POST"> -->
    <!-- <input type="text" name="catId" placeholder="catId"> -->
    <input type="text" v-model="nameInput" name="catName" placeholder="your cat's name here">
    <input type="text" v-model="ageInput" placeholder="your cat's age here">
    <button @click="handleClick(e)">Submit</button>
    <!-- </form> -->
    <div>
        <!-- <div class="table" v-for="cat in cats" :key="cat.id"> -->
        <!-- <p>{{ cats[0].name }}</p> -->
    </div>
</template>
<script>


const DATA_URL = "http://localhost:4000/cats"

export default {
    name: 'catsList',
    data: () => ({
        error: 'no data to display',
        cats: [],
        catFormData: {
            name: '',
            age: null
        }
    }),
    mounted() {
        fetch(DATA_URL)
            .then(response => response.json())
            .then(result => {
                this.cats = result
            })
    },
    methods: {
        handleClick() {
            this.catFormData.name = this.nameInput;
            this.catFormData.age = this.ageInput

            fetch(DATA_URL, {
                method: 'POST',
                body: this.catFormData
                    
            })

        }
    }
}
</script>
<style></style>