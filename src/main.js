import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Chart } from "chart.js";
import Chartkick from "vue-chartkick";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(Chartkick.use(Chart));
Vue.use(Vuex);

Vue.config.productionTip = false;
require("./assets/css/main.css");
require("./assets/sass/main.scss");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
