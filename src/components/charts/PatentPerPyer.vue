<template>
  <div class="small">
    <h3 class="pat-title" style="padding-top: 20px">Patient Per Pyer</h3>
    <div class="per-product"></div>
    <barmixen :width="300" :height="340" />
    <!-- <column-chart :data="option"></column-chart> -->
  </div>
</template>
<script>
import barmixen from "@/charts/barMixen.vue";
// import { Chart } from "chart.js";

// const ctx = document.getElementById("myChart").getContext("2d");
export default {
  name: "PatentPerPyer",
  components: {
    barmixen,
  },
};
</script>
<style scoped>
/* .per-product {
  height: 400px;
  width: 100%;
  border-radius: 20px;
} */
.small {
  background: #ddd !important;
  border-radius: 20px;
}
.per-product {
  background-color: rgba(174, 174, 174, 0.7) !important;
  border-radius: 20px;
}
</style>
