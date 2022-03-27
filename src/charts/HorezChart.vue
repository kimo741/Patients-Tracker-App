<script>
import { HorizontalBar } from "vue-chartjs";
// const ctx = document.getElementById("myChart").getContext("2d");
import axios from "axios";

export default {
  name: "HorezChart",
  extends: HorizontalBar,
  data() {
    return {
      data: "",
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
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
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        // width: 50,
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },

  async mounted() {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    const resp = await axios.get(
      "https://home.phi-pt.cat-sw.com/api/admin/cities",
      {
        header: {
          Authorization: "Bearer" + token,
        },
      }
    );
    let Phi = resp.data.data;

    (this.data = {
      labels: [...Phi.map((el) => el.name)],
      datasets: [
        {
          label: "Total Patients Per City of Votes",
          data: [700, 1200, 17000, 20000, 9000],

          backgroundColor: [...Phi.map((el) => el.color)],
          borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
          borderWidth: 0,
          barPercentage: 0.4,
        },
      ],
    }),
      console.log(Phi);

    this.renderChart(this.data, this.options);
  },
};
</script>
