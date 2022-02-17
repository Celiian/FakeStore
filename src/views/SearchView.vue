<script setup>
import { selectedItemStore } from "../stores/selectedItems";
</script>
<script>
export default {
  props: {},
  data() {
    return {
      products: [],
    };
  },
  methods: {
    refresh() {
      const selectedProduct = selectedItemStore();
      this.products = selectedProduct.getListOfSearchedproducts;
    },
  },
  created: function () {
    const selectedProduct = selectedItemStore();
    this.products = selectedProduct.getListOfSearchedproducts;
  },
};
</script>

<template>
  <div>

    <div v-for="item in this.products" v-bind:key="item.id" class="Products">
      <div class="divProduct">
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
    </div>
  </div>
</template>



<style>
.divProducts {
  display: flex;
  flex-wrap: wrap;
}

.categoryName {
  font-size: 300%;
  margin: 0px;
  margin-left: 1%;
}

.divCategory {
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex-wrap: wrap;
}
</style>