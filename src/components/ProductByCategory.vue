<script>
import Product from "./Product.vue";
import { selectedItemStore } from '../stores/selectedItems'
export default {
  components: { Product },
  props: {
    category: String,
    limit: Number,
  },
  data() {
    return {
      produits: [],
    };
  },
  methods: {
    selectProduct(item) {
    const selectedProduct = selectedItemStore();
    selectedProduct.setChoosedProduct(item)
    },
  
  },

  async created() {
    var response = {};

    response = await fetch(
      "https://fakestoreapi.com/products/category/" +
        this.category +
        "?limit=" +
        this.limit
    );

    const data = await response.json();
    this.produits = data;
  },
};
</script>

<template>
  <div v-for="item in this.produits" v-bind:key="item.id" class="Products">
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
</template>


<style>
.Products {
  margin: 10px;
}

.divProduct {
  display: flex;
  width: 350px;
  height: 250px;
  border-style: solid;
  border-color: rgb(63, 62, 62);
  border-radius: 3%;

  padding: 20px;
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