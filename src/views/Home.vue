<script setup>
import Product from "@/components/Product.vue";
</script>

<template>
  <div class="divPresentation">
    <Product :number="Math.floor(Math.random() * 17) + 1" />
    <Product :number="Math.floor(Math.random() * 17) + 1" />
    <Product :number="Math.floor(Math.random() * 17) + 1" />
  </div>
</template>


<style>
.divPresentation {
  display: flex;
  justify-content: space-around;
}

.product {
  margin-left: 5%;
  margin-right: 5%;
}
</style>