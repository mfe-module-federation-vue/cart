import Vue from "vue";
import App from "./App.vue";
import { frameworkConfig } from "ds/DSConfig";

Vue.config.productionTip = false;

new Vue({
  ...frameworkConfig,
  render: (h) => h(App),
}).$mount("#app");
