<template>
  <v-list-item>
    <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{ product.name }}</v-list-item-title>
      <v-list-item-subtitle class="text-right px-2">
        <strong> {{ product.quantity }}un </strong>
        <span> | </span>
        <h2>
          <em><small>R$</small> {{ totalPrice }}</em>
        </h2>
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <DSButton icon>
        <v-icon>mdi-pencil</v-icon>
      </DSButton>
    </v-list-item-action>
  </v-list-item>
</template>
<script>
import DSButton from "ds/DSButton";

export default {
  name: "CartProduct",
  components: {
    DSButton,
  },
  props: ["index", "product"],
  computed: {
    totalPrice() {
      return Number(
        this.product.quantity * parseFloat(this.product.unitPrice)
      ).toFixed(2);
    },
  },
};
</script>

<style scope>
h2 {
  display: inline-block;
}
</style>