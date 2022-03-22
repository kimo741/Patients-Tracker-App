import Vue from "vue";
import Vuex from "vuex";
import Admin from "./admin/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Admin,
  },
});
