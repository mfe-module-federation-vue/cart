<template>
  <v-list two-line>
    <template v-for="(product, n) in cart.products">
      <CartProduct :key="n" :product="product"> </CartProduct>
      <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
    </template>
  </v-list>
</template>

<script>
import CartProduct from "./CartProduct.vue";
import { cart } from "../services/cart.service";

export default {
  name: "CartProductList",
  components: { CartProduct },
  data: () => ({
    cart: {},
    loading: true,
  }),
  mounted() {
    this.cart = cart();
  },
};
</script>
