<template>
  <v-list two-line>
    <template v-for="n in 6">
      <CartProduct :key="n" :index="n"> </CartProduct>
      <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
    </template>
  </v-list>
</template>

<script>
import CartProduct from "./CartProduct.vue";
export default {
  name: "CartProductList",
  components: { CartProduct },
};
</script>
