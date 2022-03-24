<script>
import { Bar } from "vue-chartjs";
// const ctx = document.getElementById("myChart").getContext("2d");
import axios from "axios";

export default {
  name: "barmixen",
  extends: Bar,
  data() {
    return {
      data: "",
      options: {
        maintainAspectRatio: false,

        responsive: true,

        scales: {
          yAxes: [{ stacked: true }],
          xAxes: [
            {
              stacked: true,
              // ticks: { maxRotation: 90, minRotation: 90 },
            },
          ],
        },
      },
    };
  },

  async mounted() {
    // this.renderChart(this.chartData, this.options);
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    const resp = await axios.get(
      "https://home.phi-pt.cat-sw.com/api/admin/main-charts",
      {
        header: {
          Authorization: "Bearer" + token,
        },
      }
    );
    let patientPayers = await resp.data.patient_per_payers.data;

    this.data = {
      labels: [...patientPayers.map((doc) => doc.name)],
      datasets: [
        {
          label: "Long",
          backgroundColor: "#0353a4",
          barPercentage: 0.5,
          data: [10000, 7000, 5500, 5000, 11111, 5600],
        },
        {
          label: "Short",
          backgroundColor: "#E02020",
          barPercentage: 0.5,
          data: [2000, 2100, 1500, 50, 1500, 3000],
        },
      ],
    };
    this.renderChart(this.data, this.options);
  },
};
</script>
