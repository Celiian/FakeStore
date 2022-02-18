<script setup>
import Product from "./Product.vue";
import { selectedItemStore } from "../stores/selectedItems";
import { productListStore } from "../stores/productList";

import { mapState } from "pinia";
</script>

<script>
export default {
  computed: {
    ...mapState(selectedItemStore, ["categoryChoosed"]),
    ...mapState(productListStore, ["productByCategory"]),
  },

  components: { Product },
  data() {
    return {
      produits: [],
      limit: 20,
      category: "",
      productByCategorylist: new Map(),
    };
  },
  watch: {
    categoryChoosed: function () {
      this.category = this.categoryChoosed;
      this.produits = this.productByCategorylist.get(this.category);
    },
  },
  methods: {
    selectProduct(item) {
      const selectedProduct = selectedItemStore();
      selectedProduct.setChoosedProduct(item);
    },
  },
  async created() {
    const productList = productListStore();
    productList.fetchProductByCategory();
    this.productByCategorylist = this.productByCategory;
    this.category = this.categoryChoosed;
    this.produits = this.productByCategorylist.get(this.category);
  },
};
</script>

<template>
  <div class="divProduct" v-for="item in this.produits" v-bind:key="item.id">
    <div class="divLeft">
      <RouterLink to="/product" class="link" @click="selectProduct(item)">
        <h3 class="title">{{ item.title }}</h3>
      </RouterLink>
    </div>
    <div class="divRight">
      <div class="divImg">
        <img class="img" :src="item.image" />
        <span>{{ item.price }} €</span>
      </div>
      <!-- <span class="rating">{{ produits.rating }}⭐ / 5 ( {{produits.rating}})</span>-->
    </div>
  </div>
</template>

<style>
.divProduct {
  display: flex;
  width: 350px;
  height: 250px;
  border-style: solid;
  border-color: rgb(63, 62, 62);
  border-radius: 3%;

  padding: 20px;
  margin: 1%;
}
.divLeft {
  margin-right: 5%;
}
.divRight {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.divImg {
  border-color: black;
  border-width: 1px;
  width: 100px;
  height: 100px;
}
.rating {
  font-size: 90%;
  margin-top: 2%;
}

.title:hover {
  text-decoration: underline;
  color: rgb(25, 25, 90);
}
.title:visited {
  text-decoration: underline;
  color: rgb(25, 25, 90);
}
.img {
  width: 100px;
  height: auto;
}
</style>