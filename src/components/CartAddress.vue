<template>
  <v-form ref="form" v-model="form" class="pa-4 pt-6">
    <v-textarea
      v-model="address"
      auto-grow
      filled
      color="deep-purple"
      label="Address"
      rows="1"
    ></v-textarea>
    <v-text-field
      v-model="zipCode"
      filled
      color="deep-purple"
      label="Zip Code"
    ></v-text-field>
    <v-text-field
      v-model="city"
      filled
      color="deep-purple"
      label="city address"
      type="City"
    ></v-text-field>
    <v-checkbox v-model="agreement" color="deep-purple">
      <template v-slot:label> Main address </template>
    </v-checkbox>
  </v-form>
</template>
<script>
export default {
  name: "CartAddress",
  data: () => ({
    form: null,
    address: "231, Mayor Street",
    city: "Dublin",
    zipCode: "D1",
    agreement: null,
  }),
};
</script>
