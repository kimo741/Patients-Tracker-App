<template>
  <div class="small">
    <h3 class="pat-title">number of patients</h3>
    <div class="per-product">
      <p class="per-total">148,850</p>
      <span class="Patient-span">Patient</span>
      <div class="svg-container">
        <bar-chart
          class="ch-2"
          :colors="['#A020F0', '#A020F0']"
          :data="[
            ['Darzalex', 10050],
            ['Stelara CD', 4050],
            ['Stelara UC', 11110],
            ['Tremfaya PsO', 2500],
            ['Erleada PsO', 2500],
            ['Impruvica PsO', 7000],
          ]"
        ></bar-chart>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";

export default {
  name: "PatentPerProduct",
  data() {
    return {
      info: null,
    };
  },

  //   created() {
  //     // axios
  //     //   .get("https://home.phi-pt.cat-sw.com/api/admin/main-charts", {
  //     //     headers: { Authorization: "bearer" + token },
  //     //   })
  //     //   .then((response) => {
  //     //     console.log(response.data);
  //     //     this.info = response.data;
  //     //   })
  // //       .catch((error) => console.log(error.response));
  // //   },
  // };
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
</style>
