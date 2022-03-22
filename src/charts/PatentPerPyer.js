// // import axios from "axios";
// // var data = [];

// // export const sendGetRequest = async () => {
// //   const token = localStorage.getItem("token");
// //   axios.defaults.headers.common["Authorization"] = "Bearer " + token;
// //   try {
// //     const resp = await axios.get(
// //       "https://home.phi-pt.cat-sw.com/api/admin/main-charts",
// //       {
// //         header: {
// //           Authorization: "Bearer" + token,
// //         },
// //       }
// //     );
// //     let patientPayers = await resp.data.patient_per_payers.data;

// //     // patientPayers.map((doc) => planet.data.labels.push(doc.name));
// //     patientPayers.map((doc) => data.push(doc.name));
// //     // planet.data.labels = patientPayers.map((doc) => doc.name);
// //     console.log(patientPayers);

// //     // console.log(patientPayers.map((doc) => doc.name));
// //     // patientPayers.map((doc) => planet.data.labels.push(doc.name));
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // c;
// // export default { options };

// const data = {
//   labels: [
//     "20/12/2019",
//     "19/12/2019",
//     "18/12/2019",
//     "17/12/2019",
//     "16/12/2019",
//     "15/12/2019",
//     "14/12/2019",

//   ],
//   datasets: [
//     {
//       label: "Long",
//       backgroundColor: "#0353a4",

//       data: [
//         9000, 5000, 5240, 3520, 2510, 3652, 4555
//       ],
//     },
//     {
//       label: "Short",
//       backgroundColor: "#ff8552",
//       data: [
//         3000, 4000, 6000, 3500, 3600, 8060, 9120
//       ],
//     },
//     {
//       label: "Spreading",
//       backgroundColor: "#4ecdc4",
//       data: [
//         6000, 7200, 6500, 4600, 3600, 9200, 8600,
//       ],
//     },
//   ],
// };

// const options = {
//   scales: {
//     yAxes: [{ stacked: true }],
//     xAxes: [
//       {
//         stacked: true,
//         ticks: { maxRotation: 90, minRotation: 90 },
//       },
//     ],
//   },
// };

// new Chart(ctx, {
//   type: "bar",
//   data: data,
//   options: options,
// });
