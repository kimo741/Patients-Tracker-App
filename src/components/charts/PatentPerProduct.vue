<template>
  <div class="small">
    <h3 class="pat-title">number of patients</h3>
    <div class="per-product">
      <p class="per-total">148,850</p>
      <span class="Patient-span">Patient</span>
      <div class="svg-container"></div>
    </div>
    <Bar-char> </Bar-char>
  </div>
</template>

<script>
// import axios from "axios";
import BarChar from "@/charts/BarChar.vue";

export default {
  name: "PatentPerProduct",
  components: {
    BarChar,
  },
};
</script>
<style scoped>
.ch-2 {
  z-index: 100 !important;
  background-color: white !important;
  color: blue;
  width: 90%;
  height: 70% !important;
  border-radius: 15px;
}
.small {
  background: #ddd !important;
  border-radius: 20px;
}
.per-product {
  background-color: rgba(174, 174, 174, 0.7) !important;
  border-radius: 20px;
}
</style>
