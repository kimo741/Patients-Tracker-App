// import axios from "axios";
// const sendGetRequest = async () => {
//   const token = localStorage.getItem("token");
//   axios.defaults.headers.common["Authorization"] = "Bearer " + token;
//   try {
//     const resp = await axios.get(
//       "https://home.phi-pt.cat-sw.com/api/admin/main-charts",
//       {
//         header: {
//           Authorization: "Bearer" + token,
//         },
//       }
//     );

//     let patientProducts = await resp.data.patient_per_products.data;
//     // console.log(patientProducts);
//     // return datta.push(data);
//     // return patientProducts;

//     patientProducts.map((doc) => chartData.labels.push(doc.name));
//     //   patientPayers.map((doc) => data.push(doc.name));
//     // planet.data.labels = patientPayers.map((doc) => doc.name);
//   } catch (err) {
//     console.log(err);
//   }
// };
// sendGetRequest();
// var data = []

export var chartData = {
  labels: [],
  datasets: [
    {
      label: "Bar Chart",
      borderWidth: 1,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
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
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      pointBorderColor: "#2554FF",
      data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
    },
  ],
};
export var options = {
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
  responsive: true,
  maintainAspectRatio: false,
};

export default { options, chartData };
