import { defineStore } from "pinia";

export const productListStore = defineStore({
  id: "productList",
  state: () => ({
    productList: {},
    productByCategory: new Map(),
  }),
  getters: {
    getProductByCategory() {
      return this.categoryList
    },
  },
  actions: {
    setProductList(data) {
      this.productList = data
    },
    getProductList() {
      return this.productList
    },
    setProductByCategory(data) {
      this.categoryList = data
    },
    async fetchProductByCategory() {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      const categoriesName = data;
      var max = categoriesName.length
      for (let i = 0; i < max; i++) {
        const category = categoriesName[i]
        const res = await fetch(
          "https://fakestoreapi.com/products/category/" +
          category +
          "?limit=20");
        const data = await res.json();
        this.productByCategory.set(category, data)
      }
    }
  }
});