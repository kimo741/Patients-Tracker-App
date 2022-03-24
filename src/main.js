import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faPerson } from "@fortawesome/free-solid-svg-icons";
// import { faPerson } from "@fortawesome/free-brands-svg-icons";

library.add(faPerson);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Chartkick.use(Chart));
// import "chartkick/chart.js";

// register globally (or you can do it locally)

// import VueApexCharts from "vue-apexcharts";
// Vue.use(VueApexCharts);

// Vue.component("apexchart", VueApexCharts);

// import Chart from "chart.js";;
Vue.use(VueAxios, axios);
Vue.use(Vuex);
// Vue.use(Chart);

Vue.config.productionTip = false;
require("./assets/css/main.css");
require("./assets/sass/main.scss");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
