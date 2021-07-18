import Vue from "vue";

import Vuex from "vuex";

import userModuleFromRoot from 'root/userModuleFromRoot'

Vue.use(Vuex);

const store = new Vuex.Store({ modules: { user: userModuleFromRoot } });

export default store;
