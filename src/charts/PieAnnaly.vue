<script>
import { Pie } from "vue-chartjs";
import axios from "axios";
export default {
  name: "PieAnnaly",
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: ["Proved", "Reject"],
        datasets: [
          {
            borderWidth: 0,
            borderColor: ["#fff", "#000"],
            backgroundColor: ["#43E0AA", "#935CCB"],
            data: [35000, 1200],
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
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
    // let patientAnalytics = response.data.patient_analytics;

    let anal = await resp.data.patient_analytics;

    console.log(anal);
    // i will add data manualy because data values is 0
    this.chartData = {
      labels: ["Proved", "Reject"],
      datasets: [
        {
          borderWidth: 0,
          borderColor: ["#fff", "#000"],
          backgroundColor: ["#43E0AA", "#935CCB"],
          data: [35000, 1200],
        },
      ],
    };

    this.renderChart(this.chartData, this.options);
  },
};
</script>
