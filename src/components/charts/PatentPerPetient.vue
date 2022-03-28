<template>
  <div class="small">
    <div class="charts-1">
      <h3 class="pat-title">number of patients</h3>
      <!-- first chart -->-
      <div class="total-num-pat">
        <p class="total">total number of patients</p>
        <p class="num">3,200,000</p>
        <div class="svg">
          <area-chart
            class="ch"
            :data="{
              '2021-01-01 00:00:00 -0800': 1,
              '2019-06-01 00:00:00 -0800': 0.5,
              '2020-01-01 00:01:00 -0800': 2,
            }"
          ></area-chart>
        </div>
      </div>

      <!-- payer number -->
      <div class="total-num-pay">
        <a href="#"><img class="group-png" src="@/assets/group.png" /></a>
        <div class="pay-cont">
          <p class="total">total number of payer</p>
          <p class="num">120</p>
        </div>
      </div>

      <!-- patient analytics -->
      <div class="pat-an">
        <p class="total">patient analytics</p>
        <!-- chart & approved/rejected container -->
        <div class="pat-cont">
          <!-- chart container (SVG) -->
          <PieAnnaly :width="300" :height="200" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PieAnnaly from "@/charts/PieAnnaly.vue";
// import axios from "axios";
export default {
  name: "PatentPerPetient",
  components: { PieAnnaly },
  data() {
    return {
      data: "",
    };
  },

  // computed: {
  //   patientsNumData() {
  //     return this.$store.state.Admin.patientsNumS;
  //   },
  // },
  // async mounted() {
  //   const token = localStorage.getItem("token");
  //   axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  //   const resp = await axios.get(
  //     "https://home.phi-pt.cat-sw.com/api/admin/main-charts",
  //     {
  //       header: {
  //         Authorization: "Bearer" + token,
  //       },
  //     }
  //   );

  //   let patientAnalytics = await resp.data.patient_analytics;
  //   console.log(patientAnalytics);
  //   this.data = {
  //     "2021-01-01 00:00:00 -0800": 1,
  //     "2019-06-01 00:00:00 -0800": 0.5,
  //     "2020-01-01 00:01:00 -0800": 2,
  //   };
  // },
};
</script>
<style scoped>
.ch {
  z-index: 100 !important;
  background-color: white !important;
  height: 80% !important;
}
.total {
  font-size: 2rem !important;
  font-weight: bolder;
}
</style>
