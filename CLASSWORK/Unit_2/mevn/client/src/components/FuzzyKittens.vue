<template>
    <div class="fuzzy-container">
        <router-link to="/dogs">
            <span class="single-home-icon">🏠</span> Home
        </router-link>
        <router-link to="/library">
            <button>Go to Library</button>
        </router-link>

        <h1>Fuzzy Kittens</h1>
        <!-- modal on click -->
        <button @click="showModal = true">Register Your MeowMeow!</button>

        <!-- vue modal test -->
        <transition name="modal-fade">
            <div v-if="showModal" class="modal-backdrop">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Register Your MeowMeow!</h5>
                        <button type="button" @click="showModal = false">Close</button>
                    </div>
                    <div class="modal-body">
                        <form v-if="showForm" @submit.prevent="addKitten" class="form-group">
                            <input v-model="newKitten.name" placeholder="Name" class="form-control mb-2">
                            <input v-model="newKitten.age" placeholder="Age" class="form-control mb-2">
                            <input v-model="newKitten.description" placeholder="Description" class="form-control mb-2">

                            <div v-for="(like, index) in newKitten.likes" :key="index" class="mb-2">
                                <input v-model="newKitten.likes[index]" placeholder="Likes" class="form-control">
                                <button @click="newKitten.likes.splice(index, 1)"
                                    class="btn btn-danger mt-1">Remove</button>
                            </div>
                            <button type="button" @click="newKitten.likes.push('')" class="btn btn-primary mb-2">Add
                                Like</button>

                            <div v-for="(dislike, index) in newKitten.dislikes" :key="index" class="mb-2">
                                <input v-model="newKitten.dislikes[index]" placeholder="Dislikes" class="form-control">
                                <button @click="newKitten.dislikes.splice(index, 1)"
                                    class="btn btn-danger mt-1">Remove</button>
                            </div>
                            <button type="button" @click="newKitten.dislikes.push('')" class="btn btn-primary mb-2">Add
                                Dislike</button>

                            <input type="file" ref="image" class="form-control mb-2">
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </transition>

        <!-- Table -->
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Description</th>
                    <th>Likes</th>
                    <th>Dislikes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="kitten in kittens" :key="kitten._id">
                    <td><img :src="'http://localhost:4000/' + kitten.imageUrl" alt="Kitten" width="100">
                    </td>
                    <td><strong>{{ kitten.name }}</strong></td>
                    <td>{{ kitten.age }}</td>
                    <td>{{ kitten.description }}</td>

                    <!-- likes -->
                    <td>
                        <ul>
                            <li v-for="like in kitten.likes" :key="like">{{ like }}</li>
                        </ul>
                    </td>

                    <!-- dislikes -->
                    <td>
                        <ul>
                            <li v-for="dislike in kitten.dislikes" :key="dislike">{{ dislike }}</li>
                        </ul>
                    </td>


                </tr>
            </tbody>
        </table>
    </div>
</template>

  
<script>
export default {
    data() {
        return {
            showModal: false,
            showForm: true,
            kittens: [],
            newKitten: { name: '', age: '', description: '', likes: [''], dislikes: [''] },
        };
    },
    async mounted() {
        console.log("Component mounted, fetching kittens...");
        try {
            const response = await fetch('http://localhost:4000/kittens');
            const data = await response.json();
            this.kittens = data;
            console.log("Kittens fetched:", this.kittens);
        } catch (error) {
            console.log("There was an error fetching data", error);
        }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
            console.log("Toggled showModal:", this.showModal);
        },
        async addKitten() {
            try {
                const formData = new FormData();
                formData.append('name', this.newKitten.name);
                formData.append('age', this.newKitten.age);
                formData.append('description', this.newKitten.description);
                formData.append('likes', JSON.stringify(this.newKitten.likes));
                formData.append('dislikes', JSON.stringify(this.newKitten.dislikes));
                formData.append('image', this.$refs.image.files[0]);

                const response = await fetch('http://localhost:4000/kittens', {
                    method: 'POST',
                    body: formData,
                });

                const addedKitten = await response.json();
                this.kittens.push(addedKitten);

                // Close the modal and reset the form
                this.showModal = false;
                this.newKitten = { name: '', age: '', description: '', likes: [''], dislikes: [''] };
                this.$refs.image.value = '';
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },
    },
};
</script>


<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    text-align: left;
}

th,
td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #f5f5f5;
}

form {
    width: 60%;
    margin: auto;
}

input[type="text"],
input[type="number"],
textarea {
    width: 100%;
    padding: 10px;
    margin: 5px 0 20px 0;
    border: none;
    background: #f1f1f1;
}

input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #45a049;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    padding: 20px;
}

.fuzzy-container {
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}
</style>

  