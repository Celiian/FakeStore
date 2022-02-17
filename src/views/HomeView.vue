<script setup>
import Product from "@/components/Product.vue";
</script>
<script>
export default {
  data() {
    return {
      random: [],
    };
  },
  created: function () {
    var y = 0;
    var i = 0;
    while (i < 3) {
      var x = Math.floor(Math.random() * 20) + 1;
      if (y != x) {
        this.random.push(x);
        y = x;
        i++;
      }
    }
  },
};

const Na = "Na";
</script>
<template>
  <div class="divPresentation">
    <Product
      v-for="i in 3"
      v-bind:key="i"
      :number="this.random[i-1]"
      :category="this.Na"
      :limit="0"
    />
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