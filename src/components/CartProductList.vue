<template>
  <v-list two-line>
    <template v-for="product in products">
      <CartProduct :key="product.name" :product="product"> </CartProduct>
      <v-divider :key="`${product.name}-divider`"></v-divider>
    </template>
  </v-list>
</template>

<script>
import CartProduct from "./CartProduct.vue";
import store from "root/store";

export default {
  name: "CartProductList",
  components: { CartProduct },
  computed: {
    products() {
      return store.getters.cart;
    },
  },
};
</script>
