<template>
  <div>
    <h1>outfitplanner</h1>
    <div class="split-layout">
      <div class="left-panel">
        <a href="#" @click.prevent="toggleCategoriesDropdown">
          <div class="wardrobe-tab">
            Wardrobe <i class="fas fa-caret-down" :class="{ 'rotate-arrow': showCategories }"></i>
          </div>
        </a>
        <div v-if="showCategories" class="categories-dropdown">
          <ul>
            <li v-for="(category, index) in Object.keys(categorizeItemsByCategory)" :key="index">
              <a href="#" @click.prevent="selectCategory(category)">{{ category }}</a>
            </li>
          </ul>
        </div>
        <div class="selected-items">
          <h2>Selected Items</h2>
          <ul>
            <li v-for="(selectedItem, index) in selectedItems" :key="index">
              {{ selectedItem.name }}
              <button @click="removeSelectedItem(index)">Remove</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-panel">
        <div v-if="selectedItem">
          <h2>Selected Item</h2>
          <img :src="selectedItem.picture" :alt="selectedItem.category" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// console.log('Item:', item);
// console.log('Item _id:', item._id);
import { decodeCredential, googleLogout } from "vue3-google-login";
import { useRoute } from "vue-router";
export default {
  name: "allWardrobeItems",
  data: () => ({
    error: "",
    items: {},
    useremail: "",
    isLoggedIn: false,
    userName: "",
    categories: {},
    currentIndex: {
      tops: 0,
      bottoms: 0,
      outwears: 0,
      accessories: 0,
      shoes: 0,
    },
    showCategories: false,
    selectedItems: [],
    selectedCategory: null,
  }),
  mounted() {
    if (this.$cookies.isKey("user_session")) {
      this.isLoggedIn = true;

      const userData = decodeCredential(this.$cookies.get("user_session"));
      console.log(userData);

      this.useremail = userData.email;
      this.userName = userData.given_name;
      console.log(userData.email);
    }
    const route = useRoute();
    fetch(`http://localhost:4000/allitems/${route.params.useremail}`, {})
      .then((response) => response.json())
      .then((result) => {
        // this.items = categorizeItems(result);
        this.items = result;
        console.log(result.wardrobeItems);
      });
  },
  computed: {
    categorizeItemsByCategory() {
      let categorizedItems = {
        tops: [],
        bottoms: [],
        outwears: [],
        accessories: [],
        shoes: [],
      };

      if (this.items && this.items.wardrobeItems) {
        this.items.wardrobeItems.forEach((item) => {
          const category = item.category;

          // Check if the category is recognized
          if (category in categorizedItems) {
            categorizedItems[category].push(item);
          }
        });
      }

      return categorizedItems;
    },
  },
  methods: {
    handleLogout: function () {
      googleLogout();
      this.$cookies.remove("user_session");
      this.isLoggedIn = false;
      this.userName = "";
      this.$router.push({ name: "loginPage" });
    },
    previousImage(category) {
      if (this.currentIndex[category] > 0) {
        this.currentIndex[category]--;
      }
    },
    nextImage(category) {
      const categoryItems = this.categorizeItemsByCategory[category];
      if (this.currentIndex[category] < categoryItems.length - 1) {
        this.currentIndex[category]++;
      }
    },
    toggleCategoriesDropdown() {
      this.showCategories = !this.showCategories; // Toggle visibility
    },
    selectCategory(category) {
    this.selectedCategory = category;
    this.selectedItem = null
  },
  addSelectedItem(item) {
      this.selectedItems.push(item);
    },   removeSelectedItem(index) {
      this.selectedItems.splice(index, 1);
    },    selectItem(item) {
      this.selectedItem = item;
    },
  },
};
</script>

<style scoped>
.itemcard {
  display: flex;
  flex-wrap: wrap;
}
.itemcontainer {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Add a box shadow */
  margin: 20px; /* Add margin for spacing between items */
  padding: 10px; /* Add padding to space the content from the border */
}
img {
  width: 100px;
}
.split-layout {
  display: flex;
  justify-content: space-between;
}

.left-panel {
  flex: 1;
  padding: 20px;
}

.right-panel {
  flex: 1;
  padding: 20px;
}

</style>
