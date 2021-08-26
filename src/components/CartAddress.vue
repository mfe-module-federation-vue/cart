<template>
  <v-form ref="form" v-model="form" class="pa-4 pt-6">
    <DSInput v-model="address" auto-grow label="Address" rows="1"></DSInput>
    <DSInput v-model="zipCode" label="Zip Code"></DSInput>
    <DSInput v-model="city" label="city address" type="City"></DSInput>
    <v-checkbox v-model="agreement" color="deep-purple">
      <template v-slot:label> Main address </template>
    </v-checkbox>
  </v-form>
</template>
<script>
import DSInput from "ds/DSInput";

export default {
  name: "CartAddress",
  components: { DSInput },
  data: () => ({
    form: null,
    address: "231, Mayor Street",
    city: "Dublin",
    zipCode: "D1",
    agreement: null,
  }),
};
</script>
