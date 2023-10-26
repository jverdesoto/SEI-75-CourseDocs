<template>

    <div class="main-continer">
  
      
  <div class="clothesnav">
        <!-- <a href="#" @click.prevent="toggleCategoriesDropdown"> -->
          <!-- <div class="wardrobe-tab">
            Wardrobe
          </div> -->
        <!-- </a> -->
        <!-- <div v-if="showCategories" class="categories-dropdown"> -->
          <ul class="categories-navbar">
            <li
              v-for="(category, index) in Object.keys(categorizeItemsByCategory)"
              :key="index"
            >
              <a href="#" @click.prevent="selectCategory(category)">{{
                category
              }}</a>
            </li>
          </ul>
        <!-- </div> -->
  
        <!-- <div class="leftpannel">
      </div> -->
  <div  class="items-of-category">
        <div v-if="selectedCategory">
          <div class="item-scroll-container">
          <div
            class="itemcard"
            v-for="(item, index) in categorizeItemsByCategory[selectedCategory]"
            :key="index"
            @click="selectItem(item)"
          >
            <img :src="item.picture" :alt="item.category" />
          </div>
        </div>
        </div>
      </div>
      </div>
  
      <div class="right-panel">
        <!-- <div v-if="selectedItem">
          <h2>Selected Item</h2>
          <div v-for="(selectedItem, index) in selectedItems" :key="index">
            <img :src="selectedItem.picture" :alt="selectedItem.category" />
            <button @click="removeSelectedItem(index)">Remove</button>
  
          </div>
        </div> -->
        <!-- <div v-if="itemsEditable"> -->
    <!-- Editable selected items -->
    <!-- <div v-for="(selectedItem, index) in selectedItems" :key="index">
      <img :src="selectedItem.picture" :alt="selectedItem.category" />
      <button @click="removeSelectedItem(index)">Remove</button>
    </div>
    <button @click="toggleItemsEditable">outfit done</button>
    <div>
        <input v-model="outfitName" placeholder="Enter outfit name" />
      </div>
    </div>
  
  <div v-else> -->
    <!-- Non-editable selected items -->
    <!-- <div v-for="(selectedItem, index) in selectedItems" :key="index">
      <img :src="selectedItem.picture" :alt="selectedItem.category" />
    </div>
  </div>
  <div>
      <p>Outfit Name: {{ outfitName }}</p>
    </div>
  <button @click="saveOutfit">Save Outfit</button>
      </div> -->
  
  
      <div class="left-section">
          <div v-if="itemsEditable"  class="outfit-selection">
            <!-- Editable selected items -->
            <div v-for="(selectedItem, index) in selectedItems" :key="index" class="outfit-image-selected">
              <img :src="selectedItem.picture" :alt="selectedItem.category" />
              <button @click="removeSelectedItem(index)" class="remove-button">x</button>
            </div>
          </div>
  
          <div v-else>
      <!-- Non-editable selected items -->
      <div v-for="(selectedItem, index) in selectedItems" :key="index" class="outfit-image-selected">
        <img :src="selectedItem.picture" :alt="selectedItem.category" />
      </div>
      <!-- <div>
        <p>Outfit Name: {{ outfitName }}</p>
      </div>
      <button @click="saveOutfit">Save Outfit</button> -->
    </div>
         
        </div>
  
        <div class="right-section">
          <div v-if="itemsEditable">
              <button  @click="toggleItemsEditable">Outfit Done</button>
              <div>
            <input v-model="outfitName" placeholder="Enter outfit name" />
          </div>
          </div>
          <!-- <button  @click="toggleItemsEditable">Outfit Done</button> -->
          <div v-else>
            
          <p>Outfit Name: {{ outfitName }}</p>
        
        <button @click="saveOutfit">Save Outfit</button>
        </div>
      </div>
  
    </div>
  </div>
    <!-- 
      <div
        class="categorycard"
        v-for="(category, index) in Object.keys(categorizeItemsByCategory)"
        :key="index"
      >
        <div class="itemcard">
          <button @click="previousImage(category)">Previous</button>
          <div
            class="itemcontainer"
            v-if="categorizeItemsByCategory[category].length > 0"
          >
            <img
              :src="
                categorizeItemsByCategory[category][currentIndex[category]]
                  .picture
              "
              :alt="category"
            />
          </div>
          <button @click="nextImage(category)">Next</button>
        </div>
      </div> -->
  </template>
  
  <script>
  // console.log('Item:', item);
  // console.log('Item _id:', item._id);
  import { decodeCredential, googleLogout } from "vue3-google-login";
  // import { useRoute } from "vue-router";
  import { ref } from "vue"
  export default {
    name: "outfitPlanner",
    data: () => ({
      error: "",
      items: {},
      // useremail: "",
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
      isCategorySelected: false,
      showCategories: true,
      selectedCategory: null,
      selectedItem: [],
      selectedItems: [], 
      itemsEditable: true,
      outfitName: "", // Initial outfit name
    }), setup() {
          const useremail = ref('')
          return { useremail }
      },
    mounted() {
      if (this.$cookies.isKey("user_session")) {
        this.isLoggedIn = true;
  
        const userData = decodeCredential(this.$cookies.get("user_session"));
  
        this.useremail = userData.email;
        this.userName = userData.given_name;
      }
      // const route = useRoute();
      // console.log("this is the route", route)
      fetch(`http://localhost:4000/allitems/${this.useremail}`, {})
        .then((response) => response.json())
        .then((result) => {
          // this.items = categorizeItems(result);
          this.items = result;
          // console.log(result.wardrobeItems);
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
      // previousImage(category) {
      //   if (this.currentIndex[category] > 0) {
      //     this.currentIndex[category]--;
      //   }
      // },
      // nextImage(category) {
      //   const categoryItems = this.categorizeItemsByCategory[category];
      //   if (this.currentIndex[category] < categoryItems.length - 1) {
      //     this.currentIndex[category]++;
      //   }
      // },
      // toggleCategoriesDropdown() {
      //   this.showCategories = !this.showCategories; // Toggle visibility
      // },
      selectCategory(category) {
        this.selectedCategory = category;
        this.isCategorySelected = true; // Set the flag to true when a category is selected
      },
      // selectCategory(category) {
      //   this.selectedCategory = category;
      // },
      selectItem(item) {
          this.selectedItems.push(item)
          console.log("Selected items:", this.selectedItems); // Add this line for debugging
  
      },
      removeSelectedItem(index) {
      this.selectedItems.splice(index, 1);
    },  toggleItemsEditable() {
      this.itemsEditable = !this.itemsEditable;
      // if (!this.itemsEditable)
    },
    saveOutfit: function () {
      console.log("saveOutfit method called");
  
              // Get the user's email address from the component's data
              const useremail = this.useremail;
              // console.log("Data being sent in the request body:");
    
    console.log("selectedItems:", this.selectedItems);
    
              fetch(`http://localhost:4000/outfitPlanner/${this.useremail}`
              , {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          outfitName: this.outfitName,
          selectedItems: this.selectedItems,
          useremail: useremail,
      }),
  })
  .then(res => {
      console.log(res.status);
      if (res.ok) {
          this.outfitName = "";
          this.selectedItems = [];
          console.log("Saved outfit");
      } else {
          console.error("Failed to save outfit");
          console.log(res)
      }
  })
  .catch(error => {
      console.error("An error occurred:", error);
  });
          },
    },
  };
  </script>
  
  <style scoped>
  
  
  /* .itemcard {
    display: flex;
    flex-wrap: wrap;
  } */
  .itemcontainer {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Add a box shadow */
    margin: 20px; /* Add margin for spacing between items */
    padding: 10px; /* Add padding to space the content from the border */
  }
  img {
    width: 100px;
  }
  
  .leftpannel{
      height: 200px;
      width: 50%;
      display: flex;
      flex-wrap: wrap;
  }
  
  
  
  /* Existing styles ABOVE... */
  
  /* Updated styles for the clothesnav */
  /* .clothesnav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* margin-left: 10px; */
    /* cursor: pointer;
    width: 100% */
  /* }  */
  
  /* .wardrobe-tab {
    display: flex;
    align-items: center;
  } */
  
  .categories-navbar {
    list-style: none;
    display: flex;
    padding: 0;
    width: 100%;
    justify-content: space-evenly;
  
  }
  
  .categories-navbar li {
    margin-right: 20px; /* Adjust this margin to your desired spacing */
  }
  
  /* styles for category images */
  .items-of-category {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    border-bottom: 1px solid red;
    height: 200px;
  }
  
  .item-scroll-container {
    display: flex;
    flex-wrap: nowrap;
  }
  
  .itemcard {
    flex: 0 0 auto;
    margin-right: 10px; /* Adjust this margin to your desired spacing */
  }
  .right-panel {
    display: flex;
    width: 100%;
  }
  
  .left-section {
    flex: 2; /* Take up all available horizontal space */
    border-right: 1px solid red;
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap */
    justify-content: flex-start; /* Align items to the left */
  }
  .outfit-selection {
    display: flex;
    flex-wrap: wrap; /* Allow outfit selection items to wrap */
  }
  .right-section {
    flex: 1; /* Take up all available horizontal space */
    padding: 10px; /* Add some padding for spacing */
  
  }
  .outfit-image-selection {
      position: relative; /* Add this line */
    }
  .remove-button {
      /* position: absolute; */
      top: 0;
      right: 0;
      width: 24px; /* Adjust the size as needed */
      height: 24px; /* Adjust the size as needed */
      background-color: red;
      color: white;
      border: none;
      border-radius: 50%; /* Makes the button round */
      cursor: pointer;
    }
  </style>
  


  <template>
    <!-- <header>
        <div class="header-wrapper">
        <div class="top-bar">
        <h1>Outfit Forecast</h1>
        </div>
            <nav class="bottom-bar">
            <div class="links">
             
                <p>Home</p>
                <p>Blog</p>
                <p>Marketplace</p>
                
              
            </div>
            </nav>
        </div>
    </header> -->
   
      
      <main>
      <!-- Landing Page Section with Image -->
      <section class="landing-section">
        <div class="landing-image">
          <!-- <img src="/path/to/your-image.jpg" alt="Landing Image" /> -->
        </div>
      </section>

      <!-- Welcome to Outfit Forecast Section -->
      <section class="welcome-section">
        <div class="welcome-text">
          <h2>Welcome to Outfit Forecast</h2>
          <p>Explain what fashion forecast is here.</p>
        </div>
        <div class="welcome-images">
          <!-- Add images or content here -->
        </div>
      </section>


    </main>
     <footer>
        <div class="footer-content">
            <p>insta</p>
        </div>
    </footer>
</template>


<script>
export default {
  name: 'homePage',

}
</script>


<style scoped>
.header-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 100px;
  border-bottom: 3px solid #efefef;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2); 

}
.top-bar {
  display: flex;
  justify-content: center; 
  align-items: center; 
  padding-top: 40px;
  height: 50%; 
}
.links {
  display: flex;
  justify-content: center; 
  align-items: center;
  flex: 1; 
  
}
.links p {
  margin-left: 10px; 
}

.bottom-bar {
  display: flex;
  justify-content: center; 
  padding-top: 40px;
  height: 50%; 
}
footer {
  height: 80px; 
  position: fixed; 
  bottom: 0; 
  left: 0; 
  right: 0; 
  background-color: #efefef; 
  z-index: 1; 
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.2); 

}
.footer-content {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  
}
.footer-content p {
  margin: 5px; 
  padding-top: 20px;
  
}
</style>