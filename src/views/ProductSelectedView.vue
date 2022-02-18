<script>
import Product from "../components/Product.vue";
import { selectedItemStore } from "../stores/selectedItems";
export default {
  components: { Product },
  data() {
    return {
      item: {},
    };
  },

  created: function () {
    const selectedProduct = selectedItemStore();
    this.item = selectedProduct.initList;
    this.item = selectedProduct.getChoosedProduct;
  },
};
</script>



<template>
  <div>
    <div class="divInfoProduct">
      <div>
        <img :src="this.item.image" class="img" />
      </div>

      <div class="divDescription">
        <h2 class="title">{{ this.item.title }}</h2>
        <p class="price">{{ this.item.price }} $</p>
        <p>{{ this.item.description }}</p>
        <!--<span class="rating">{{ item.rating.rate }}⭐ / 5 ( {{ item.rating.count }})</span>-->
      </div>

      <div class="divBuy">
        <p>{{ this.item.price }} $</p>
        <p>Stock left : {{ Math.round(Math.random() * 300 + 1) }}</p>

        <label for="quantity">Quantity :</label>
        <select name="number" id="quantity">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>

        <button>Add to cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  </div>
</template>


<style>
.divInfoProduct {
  display: flex;
  justify-content: space-between;
  margin: 5%;
}

.title {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.397);
  padding-bottom: 2%;
}
.title:hover {
  text-decoration: none;
  color: black;
}

.divBuy {
  width: 20%;
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 5px;
  padding: 15px;
}

button {
  border-style: none;
  border-width: 1px;
  border-radius: 10px;
  background-color: rgb(255, 166, 0);
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 5px;
}

button:hover {
  background-color: rgba(255, 166, 0, 0.644);
}

.img {
  width: 300px;
}

.divDescription {
  width: 50%;
}
</style>