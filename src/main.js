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
import { faPerson, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBtGumO_LjPq3jkKkqfJjTOTVA4t2gOvAk",
    libraries: "places",
  },
});
require("../src/assets/css/main.css");
require("../src/assets/scss/main.scss");
library.add(faPerson, faGear);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Chartkick.use(Chart));

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
