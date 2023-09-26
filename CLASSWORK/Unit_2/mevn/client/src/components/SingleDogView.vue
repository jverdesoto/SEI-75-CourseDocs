<template>
    <header>
        <h1>{{ dog.name }}</h1>
    </header>
    <div class="container">
        <div class="image">
            <img :src="dog.img" alt="">
        </div>
        <div class="information">
            <p>{{ dog.name }} is {{ dog.age }} years old</p>
            <p><span>Breed:</span> {{ dog.breed }}</p>
            <p>{{ dog.details }}</p>
        </div>
        <div class="left">
            <font-awesome-icon :icon="['fas', 'angle-left']" />
        </div>
        <div class="right">
            <font-awesome-icon :icon="['fas', 'angle-right']" />
        </div>
    </div>
</template>

<script>
    const API_URL = "http://localhost:4000/dogs/2"

    export default {
        name: 'soloDogView',
        data: () => ({
            error: '',
            dog: {}
        }),
        mounted() {
            fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.dog = result[0]
            })
        },
        methods: {}
    }
</script>

<style>
    header {
        width: 100%;
        height: 14vmin;
        background-color: royalblue;
        color: antiquewhite;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        filter: drop-shadow(0 0.01vmin 2vmin black);
    }

    h1 {
        font-size: 6vmin;
    }

    .container {
        display: flex;
        flex-flow: row wrap;
    }

    .image img {
        width: 100%;
        border-radius: 0 0 25% 0;
    }

    .container > div {
        width: 50%;
        box-sizing: border-box;
    }

    .information {
        padding: 3vmin;
        text-align: left;
        font-size: 2.2vmin;
    }

    .left, .right {
        font-size: 5vmin;
        padding: 0 3vmin;
    }

    .left {
        text-align: left;
    }

    .right {
        text-align: right;
    }
</style>