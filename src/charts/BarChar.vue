<script>
import { Bar } from "vue-chartjs";
import axios from "axios";
export default {
  name: "BarChar",
  extends: Bar,
  data() {
    return {
      chartData: "",
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        // width: 50,
        responsive: true,
        maintainAspectRatio: false,
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
    let patientProducts = await resp.data.patient_per_products.data;

    this.chartData = {
      labels: [...patientProducts.map((doc) => doc.name)],
      datasets: [
        {
          label: "patient Per Products",
          borderWidth: 2,
          barPercentage: 2,

          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          pointBorderColor: "#2554FF",
          data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
          barThickness: 50,
          borderRadius: 20,
        },
      ],
    };
    this.renderChart(this.chartData, this.options);
    // this.chartData.labels =
    // patientProducts.map((doc) => this.chartData.labels.push(doc.name));
  },
  // mounted() {

  // },
};
</script>
