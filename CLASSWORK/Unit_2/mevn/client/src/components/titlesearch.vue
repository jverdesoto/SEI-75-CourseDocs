<template>
    <div>
        <h1>Books By Title</h1>
        
        <div  v-for="t in titles" :key="t._id">
            <div><h3>{{ t.title }}</h3></div>
            <!-- <div class="infotitle">
                    <p>Author: {{ t.author }}</p>
                    <p>Publishing: {{ t.publishingDate }}</p>
            </div> -->
        </div>
    </div>
</template>

<script>

export default  {   
    name: 'TitleList',
    data: () => ({
        errors: '',
        titles: []
    }),
    mounted() {
        fetch('http://localhost:4000/books/titlesearch')
        .then(response => response.json())
        .then(result => {
            this.titles = result
        })
    }
}


</script>