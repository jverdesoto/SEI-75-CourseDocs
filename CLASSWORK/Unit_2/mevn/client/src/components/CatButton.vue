<template>
    <div class="button-container">
        <router-link :to="'/cat-facts'" ><div class="button">Click for a cat fact</div></router-link>
    </div>
</template>

<style>
    .button-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: dodgerblue;
        width: 30vmin;
        height: 10vmin;
        border-radius: 10vmin;
        color: white;
        font-weight: bold;
        font-size: large;
    }

    .button:hover {
        background-color: rgb(27, 126, 224);
    }

    .button-container a {
        text-decoration: none; 
    }
</style>