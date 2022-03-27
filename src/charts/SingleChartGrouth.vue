<script>
import { HorizontalBar } from "vue-chartjs";
// const ctx = document.getElementById("myChart").getContext("2d");

export default {
  name: "SingleBar",
  extends: HorizontalBar,
  data() {
    return {
      data: {
        labels: ["YTD"],
        datasets: [
          {
            label: "Total Patients Per City of Votes",
            data: [883, 2000],
            backgroundColor: ["#003696"],
            borderColor: ["#003696"],
            barPercentage: 0.4,
            // borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
                fontColor: "transparent",
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
                labelFontColor: "red",
              },
              ticks: {
                beginAtZero: false,
                fontColor: "transparent",
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },

  async mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>
