<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
import { productListStore } from './stores/productList'
import Category from './components/Category.vue'
</script>
<script>
export default {
  components: { Category },
  data() {
    return {
    };
  },

  async created(){
    const productList = productListStore()
    var res = {};
    res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    productList.setProductList(data)
  },
};
</script>


<template>
  <header>
    <Nav />
  </header>

  <RouterView />
</template>


<style>
body {
  margin: 0px;
}
</style>