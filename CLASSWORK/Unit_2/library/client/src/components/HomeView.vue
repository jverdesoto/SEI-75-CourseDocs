<template>
    <button><router-link :to="'/books/'" >Search By Title</router-link></button>
    <button><router-link :to="'/authors/'" >Search By Author</router-link></button>
    <button><router-link :to="'/books/addOrUpdate/-1'" >Add New Book</router-link></button>
</template>