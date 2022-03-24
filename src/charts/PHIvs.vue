<script>
import { Doughnut } from "vue-chartjs";
import axios from "axios";
export default {
  extends: Doughnut,

  data() {
    return {
      data: "",
      options: {
        responsive: true,
        maintainAspectRatio: true,
        borderWidth: "10px",
        hoverBackgroundColor: "red",
        hoverBorderWidth: "10px",
        legend: {
          display: true,
          position: "right",
        },
      },
    };
  },

  async mounted() {
    // this.renderChart(this.chartData, this.options);
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    const resp = await axios.get(
      "https://home.phi-pt.cat-sw.com/api/admin/product-share-payer/3",
      {
        header: {
          Authorization: "Bearer" + token,
        },
      }
    );
    let Phi = await resp.data.product_share.data;
    // console.log(Phi);

    this.data = {
      datasets: [
        {
          data: [10, 20, 15, 5, 6, 5],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(54, 162, 200)",
          ],
        },
      ],
      labels: [...Phi.map((doc) => doc.name)],
    };

    this.renderChart(this.data, this.options, {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px",
    });
  },
};
</script>
