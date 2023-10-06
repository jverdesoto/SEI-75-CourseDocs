<template>
    <button class="btn btn-warning">{{ buttonText }}</button>
</template>

<script>
    export default {
        name: 'myButton',
        props: {
            buttonText: String
        }
    }
</script>