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
              '2019-01-01 00:00:00 -0800': 1,
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
          <div class="an-chart">
            <span class="percentage">65%</span>
            <p class="approved">approved</p>
          </div>
          <!-- approved & rejected container -->
          <div class="an-para-cont">
            <div class="an-para">
              <p class="approved">approved</p>
              <p class="approved-num">1200</p>
            </div>

            <div class="an-para">
              <p class="approved">rejected</p>
              <p class="approved-num">35000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PatentPerPetient",
  data() {
    return {
      info: [
        {
          data: [],
        },
      ],
    };
  },

  created() {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    // console.log(token);
    axios
      .get("https://home.phi-pt.cat-sw.com/api/admin/main-charts", {
        header: {
          Authorization: "Bearer" + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.info.data = response.data.number_of_patients.patients_per_year;
        //  var data = response.data;
        //   (this.info = response.data.bpi)

        // (this.info = response.data.);

        // this.info = response.data.json();
        // console.log(response.data);
        // response.data.forEach((element) => {
        //   this.info.push(element);
        // });
      })
      .catch((error) => console.log(error.response));
    // console.log(response.data);
    // console.log(data);
    console.log(this.info);
  },
};
</script>
<style scoped>
.ch {
  z-index: 100 !important;
  background-color: white !important;
  height: 80% !important;
}
</style>
