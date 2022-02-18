<script setup>
import { selectedItemStore } from "../stores/selectedItems";
import ProductByCategory from "../components/ProductByCategory.vue";
import { mapState } from "pinia";
</script>

<script>
export default {
  computed: {
    ...mapState(selectedItemStore, ["categoryChoosed"]),
  },
  data() {
    return {
      category: String,
    };
  },
  methods: {},
  created: function() {
    this.category = this.categoryChoosed;
  },
  watch: {
    categoryChoosed: function () {
      this.category = this.categoryChoosed;
    },
  },
};
</script>

<template>
  <div>
    <p class="categoryName">{{ this.category }} :</p>
    <div class="divProducts">
      <ProductByCategory/>
    </div>
  </div>
</template>


<style>
.divProducts {
  display: flex;
  flex-wrap: wrap;
}
</style>