<template> 
    <h1>Please Submit your Fav Feline</h1>
<form>
  <input type="text" id="name" value="Cat Name...."><br>
  <input type="text" id="age" value="Cat Age....."><br><br>
  <input type="submit" id="submitButton" value="Send to CatDB">
</form> 
</template>

<script>

const API_URL = 'http://localhost:4000/cats' 

export default {
    name: 'CatSubmitter',
    el: '#app',
    data: () => ({
        error: '',
    }),

    mounted() {
        fetch(API_URL) 
        .then(response => response.json())
        .then(result => {
            // this.cat = result
        })
    },
    methods: {
        submitCat: async function () {
            const element = document.getElementById('submitButton')
            element.addEventListener("click", function() {
                const Kitty = new Cat({name: document.getElementById('name'), age: document.getElementById('age') } )
                Kitty.save() 
            });
        }
    }
}
</script>