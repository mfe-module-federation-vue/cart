<!-- Usingin stepper couse a strange behavior and a lot or erros-->
<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1"> Cart </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2"> Address </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 3" step="3"> Payment </v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="step == 4" step="4"> Finished </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <CartProductList />
        <v-card-actions class="justify-end">
          <DSButton @click="next"> Next </DSButton>
        </v-card-actions>
      </v-stepper-content>

      <v-stepper-content step="2">
        <CartAddress />
        <v-card-actions class="justify-end">
          <DSButton text @click="prev"> Previous </DSButton>
          <DSButton @click="next"> Next </DSButton>
        </v-card-actions>
      </v-stepper-content>

      <v-stepper-content step="3">
        <CartPayment />
        <v-card-actions class="justify-end">
          <DSButton text @click="prev"> Previous </DSButton>
          <DSButton @click="next"> Finished </DSButton>
        </v-card-actions>
      </v-stepper-content>

      <v-stepper-content step="4">
        <CartFinish />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CartProductList from "./CartProductList.vue";
import CartPayment from "./CartPayment.vue";
import CartAddress from "./CartAddress.vue";
import CartFinish from "./CartFinish.vue";
import DSButton from "ds/DSButton";

export default {
  name: "Cart",
  components: {
    CartProductList,
    CartPayment,
    CartAddress,
    CartFinish,
    DSButton,
  },
  data() {
    return { step: 1 };
  },
  methods: {
    next() {
      this.step++;
    },
    prev() {
      this.step--;
    },
  },
};
</script>
