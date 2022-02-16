<script setup>
import Product from "@/components/Product.vue";
</script>
<script l>
const Na = "Na"
</script>
<template>
  <div class="divPresentation" >
    <Product :number="Math.floor(Math.random() * 17) + 1" :category=this.Na :limit=0 />
    <Product :number="Math.floor(Math.random() * 17) + 1" :category=this.Na :limit=0 />
    <Product :number="Math.floor(Math.random() * 17) + 1" :category=this.Na :limit=0 />
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