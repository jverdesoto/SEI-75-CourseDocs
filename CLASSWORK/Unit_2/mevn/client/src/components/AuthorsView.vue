<template>
  <div class="author-view">
    <h1>Authors</h1>
    <SearchView />
    <div class="author-grid" v-if="authors.length > 0">
      <div class="author-card" v-for="author in authors" :key="author.id" @click="selectedAuthor = author">
        {{ author.name }}
      </div>
    </div>
    <div v-if="selectedAuthor" class="modal">
      <div class="modal-content">
        <img :src="selectedAuthor.image" alt="Author Image" class="author-image-large" />
        <h2>{{ selectedAuthor.name }}</h2>
        <p><strong>Age:</strong> {{ selectedAuthor.age }}</p>
        <p><strong>Books:</strong></p>
        <ul>
          <li v-for="book in selectedAuthor.books" :key="book.id">{{ book.title }}</li>
        </ul>
        <button @click="editAuthor">Edit</button>
        <button @click="deleteAuthor">Delete</button>
        <button @click="selectedAuthor = null">Close</button>

        <form v-if="editingAuthor" @submit.prevent="updateAuthor">
          <input v-model="updatedAuthorDetails.name" placeholder="Name" />
          <input v-model="updatedAuthorDetails.age" placeholder="Age" type="number" />
          <button type="submit">Update</button>
        </form>

      </div>
    </div>
  </div>
</template>


<script>
import SearchView from './SearchView.vue';

export default {
  data() {
    return {
      authors: [],
      selectedAuthor: null,
      editingAuthor: false,
      updatedAuthorDetails: null,
    };
  },
  components: {
    SearchView
  },

  async mounted() {
    try {
      const response = await fetch("http://localhost:4000/authors");
      if (response.ok) {
        this.authors = await response.json();
      } else {
        console.error("Failed to fetch authors");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  methods: {

    editAuthor() {
      this.editingAuthor = true;
      this.updatedAuthorDetails = { ...this.selectedAuthor };  // Copy current details
    },



    async updateAuthor() {
      try {
        const response = await fetch(`http://localhost:4000/authors/${this.selectedAuthor.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.updatedAuthorDetails),  // Add 'this.' here
        });

        if (response.ok) {
          Object.assign(this.selectedAuthor, this.updatedAuthorDetails);  // Add 'this.' here too
        } else {
          console.error('Failed to update author');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
      this.editingAuthor = false;
    },


    async deleteAuthor() {
      try {
        const response = await fetch(`http://localhost:4000/authors/${this.selectedAuthor.id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Remove the author from the local state
          const index = this.authors.findIndex(author => author.id === this.selectedAuthor.id);
          this.authors.splice(index, 1);
          this.selectedAuthor = null;
        } else {
          console.error('Failed to delete author');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

  }
};
</script>


<style scoped>
.author-view {
  text-align: center;
  margin: 20px;
}

.author-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}

.author-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.author-card:hover {
  transform: scale(1.05);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  text-align: center;
}

.author-image-large {
  width: 200px;
  height: auto;
  margin-bottom: 20px;
}
</style>

