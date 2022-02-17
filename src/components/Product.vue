<script>
import { selectedItemStore } from '../stores/selectedItems'

export default {
  props: {
    number: Number,
  },
  data() {
    return {
      produits: [],
    };
  },

  methods: {
    selectProduct() {
    const selectedProduct = selectedItemStore();
    selectedProduct.setChoosedProduct(this.produits)
    },
  
  },

  async created() {
    const selectedProduct = selectedItemStore();
    var response = {};
    response = await fetch("https://fakestoreapi.com/products/" + this.number);
    const data = await response.json();
    this.produits = data;
  },
};
</script>

<template>
  <div class="divProd">
    <div>
      <RouterLink to="/product" class="link" @click="selectProduct()">
      <h3 class="title">{{ produits.title }}</h3>
      </RouterLink>
    </div>
    <div class="divRight">
      <div class="divImg">
        <img class="img" :src="produits.image" />
        <span>{{ produits.price }} €</span>
      </div>
      <!-- <span class="rating">{{ produits.rating }}⭐ / 5 ( {{produits.rating}})</span>-->
    </div>
  </div>
</template>


<style>
.divProd {
  display: flex;
  width: 450px;
  height: 250px;
  border-style: solid;
  border-color: rgb(63, 62, 62, 0.5);
  border-radius: 3%;

  padding: 20px;
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

.title {
  border-bottom-style:unset;
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
  width: 80px;
  height: auto;
}
</style>