<script>
import { Pie } from "vue-chartjs";
export default {
  //   name: "PhiVsOther",
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: ["Aproved", "Rejected"],
        datasets: [
          {
            backgroundColor: ["#26BBE3", "#935CCB"],
            data: [363, 28],
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        borderWidth: "10px",
        hoverBackgroundColor: "red",
        hoverBorderWidth: "10px",
        responsive: true,
        legend: {
          display: true,
          position: "right",
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
