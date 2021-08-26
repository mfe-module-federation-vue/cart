import Vue from "vue";
import App from "./App.vue";
import { frameworkConfig } from "ds/DSConfig";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  ...frameworkConfig,
  store,
  render: (h) => h(App),
}).$mount("#app");
