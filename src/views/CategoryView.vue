<script setup>
import { selectedItemStore } from "../stores/selectedItems";
import ProductByCategory from "../components/ProductByCategory.vue";
</script>

<script>
export default {
  data() {
    return {
      actualCategory: String,
    };
  },
  methods: {
    refresh() {
      const selectedItems = selectedItemStore();
      this.actualCategory = selectedItems.getChoosedCategory;
    },
  },
  created: function () {
    const selectedItems = selectedItemStore();
    this.actualCategory = selectedItems.getChoosedCategory;
  },
};
</script>


<template>
  <div @click="refresh()">
    <p class="categoryName">{{ this.actualCategory }} :</p>
    <div class="divProducts">
      <ProductByCategory :category="this.actualCategory" :limit="20" />
    </div>
  </div>
</template>