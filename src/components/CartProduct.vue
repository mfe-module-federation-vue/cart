<template>
  <v-list-item>
    <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>Product {{ index }}</v-list-item-title>
      <v-list-item-subtitle class="text-right px-2">
        <strong> 8un </strong>
        <span> | </span>
        <h2>
          <em><small>R$</small> 1.000,99</em>
        </h2>
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>
<script>
export default {
  name: "CartProduct",
  props: ["index"],
};
</script>

<style scope>
h2 {
  display: inline-block;
}
</style>