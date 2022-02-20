<template>
  <div class="per-product">
    <div class="results-container">
      <div class="result-num">
        <p class="per-total">148,850</p>
      </div>

      <div class="result-status">
        <span class="app-rej app">approved</span>
        <span class="app-rej rej">rejected</span>
        <span class="app-rej pen">pending</span>
      </div>
    </div>

    <div class="svg-container">
      <div class="small">
        <bar-chart
          :dataset="{ borderWidth: 8 }"
          class="ch-2"
          :colors="['0000FF', '#A020F0']"
          :data="[
            ['info.data[0].name', 500],
            ['info.data[1].name', 600],
            ['info.data[2].name', 400],
            ['info.data[3].name', 852],
            ['info.data[4].name', 300],
            ['info.data[5].name', 100],
          ]"
        ></bar-chart>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PatentPerPyer",
  data() {
    return {
      info: [
        {
          data: [],
        },
      ],
    };
  },

  mounted() {
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
        // console.log(response.data.patient_per_payers);
        this.info.data = response.data.patient_per_payers.data;

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
.ch-2 {
  z-index: 100 !important;
  background-color: white !important;
  color: blue;
  width: 90%;
  height: 70% !important;

  border-radius: 15px;
}
</style>
