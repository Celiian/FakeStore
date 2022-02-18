<script>
import { mapState } from 'pinia';
import { productListStore } from "../stores/productList";
import { selectedItemStore } from "../stores/selectedItems";

import Category from "./Category.vue";

export default {
  components: { Category },
  data() {
    return {
      listProduct: [],
      itemFound: Boolean,
      listOfProductFound: [],
      categories: {},
    };
  },
  methods: {
    search() {
      const searchBar = document.getElementById("searchBar");
      var research = searchBar.value.toLowerCase();
      const listOfProducts = this.listProduct.productList;
      this.itemFound = false;
      this.listOfProductFound = []
      for (var i in listOfProducts) {
        if (listOfProducts[i].title.toLowerCase().includes(research))
          this.listOfProductFound.push(listOfProducts[i]);
        this.itemFound = true;
      }
      if (this.itemFound) {
        const selectedProduct = selectedItemStore();
        selectedProduct.setListOfSearchedproducts(this.listOfProductFound);
        this.$router.push('/search')
      }
    },
    chooseCategory(category) {
      const selectedItems = selectedItemStore();
      selectedItems.setCategoryChoosed(category);
    },
  },
  async created() {
    const productList = productListStore();
    this.listProduct = productList.$state;
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    this.categories = data;
  },
};
</script>


<template>
  <nav class="topNav">
    <div class="divLinks">
      <RouterLink to="/" class="link">Home</RouterLink>

      <RouterLink to="/categories" class="link">All Categories</RouterLink>

      <RouterLink
        v-for="category in this.categories"
        v-bind:key="category"
        :to="'/category/' + category + '/20'"
        class="link"
        @click="chooseCategory(category)"
      >
        {{ category }}
      </RouterLink>
    </div>
    <div>
    
      <input
        id="searchBar"
        type="text"
        placeholder="Search"
        class="searchBar"
        v-on:keyup.enter="search()"
      />

    </div>
  </nav>
</template>

<style>
.topNav {
  display: flex;
  justify-content: space-between;
  background-color: rgb(44, 212, 204);
  margin-bottom: 2%;
}

.divLinks {
  display: flex;
}

.searchBar {
  height: 30%;
  width: 150px;
  margin-top: 8%;
  margin-right: 15px;
}

.link {
  text-decoration: none;
  margin-left: 10%;
  margin-right: 5%;
  width: 120px;
  height: 60px;
  margin-top: 20px;
}
.link:visited {
  text-decoration: none;
  color: black;
}
</style>