import { defineStore } from "pinia";

export const productListStore = defineStore({
  id: "productList",
  state: () => ({
    productList: {},
  }),
  getters: {
      
  },
  actions: {
   setProductList(data){
      this.productList = data
   },
   getProductList(){
        return this.productList
      }
  }
});