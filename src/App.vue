<template>
  <v-app>
    <Cart />
  </v-app>
</template>

<script>
import Cart from "./components/Cart";

export default {
  name: "App",

  components: {
    Cart,
  },

  data: () => ({
    //
  }),
};
</script>
