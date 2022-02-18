<script setup>
import ProductByCategory from "../components/ProductByCategory.vue";
</script>


<script>
export default {

 data() {
    return {
      categories: [],
    };
  },

async created() {
    const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
    const data = await response.json();
    this.categories = data;
  },
};
</script>


<template>
<div>
  <div v-for="item in this.categories" v-bind:key="item" class="divCategory">
    <p class="categoryName">{{item}} :</p>
    <div class="divProducts">
    <ProductByCategory :categoryProps="item" :limitProps=20 />
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