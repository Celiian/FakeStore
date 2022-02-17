import { defineStore } from "pinia";

export const selectedItemStore = defineStore({
  id: "selectedItemStore",
  state: () => ({
    selectedProduct: {},
    listOfSearchedproducts: {},
    categoryChoosed: String,
  }),
  getters: {
    getChoosedProduct: function () {
      return this.selectedProduct
    },
    getListOfSearchedproducts: function () {
      return this.listOfSearchedproducts
    },
    getChoosedCategory: function () {
      return this.categoryChoosed
    },
  },
  actions: {
    setChoosedProduct(productChoosed) {
      this.selectedProduct = productChoosed;
    },
    setListOfSearchedproducts(list) {
      this.listOfSearchedproducts = list;
    },
    setCategoryChoosed(category) {
      this.categoryChoosed = category;
    }
  },
});
