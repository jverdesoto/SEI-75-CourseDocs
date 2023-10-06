<template>
    <button class="btn btn-warning">{{ buttonText }}</button>
</template>

<script>
    export default {
        name: 'MyButton',
        props: {
            // This is where you add properties to make the component reusable
            buttonText: String
        }
    }
</script>