<template>
    <div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 PRESS HERE FOR YOUR DAILY CAT FACT!
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">CAT FACT</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       {{ cat.text }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
const API_URL = 'https://cat-fact.herokuapp.com/facts'

export default {
        name: 'CatFacts',
        data: () => ({
            error: 'COULD NOT FETCH',
            cat: {}
        }),

        mounted() {
            fetch(`${API_URL}`)
            .then(response => response.json()
            )
            .then(result => {
                const randomPick = Math.floor(Math.random() * result.length)
                this.cat = result[randomPick]
                // console.log(result)
            })
        },
        methods: {}
    }

</script>
