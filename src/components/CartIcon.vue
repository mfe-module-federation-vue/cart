<!-- Usingin stepper couse a strange behavior and a lot or erros-->
<template>
  <v-btn text>
    <v-badge :content="cartSize" :value="cartSize" color="green" overlap>
      <v-icon> mdi-cart </v-icon>
    </v-badge>
  </v-btn>
</template>

<script>
import { cartEmitter, EVENT_KEYS, cart } from "../dealful";

export default {
  name: "CartIcon",
  data: () => ({
    cartSize: 0,
    loading: true,
  }),
  mounted() {
    this.cartSize = cart()?.products?.length || 0;
    cartEmitter.on(EVENT_KEYS.CART, (newCartData) => {
      console.log("EVENT_KEYS", newCartData);
          this.cartSize = newCartData()?.products?.length || 0;

    });
  },
};
</script>