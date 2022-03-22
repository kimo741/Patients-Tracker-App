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
//     let data = await resp.data.number_of_patients.patients_per_year;
//     // console.log(data);
//     return datta.push(data);

//     //   // patientPayers.map((doc) => planet.data.labels.push(doc.name));
//     //   patientPayers.map((doc) => data.push(doc.name));
//     // planet.data.labels = patientPayers.map((doc) => doc.name);
//   } catch (err) {
//     console.log(err);
//   }
// };
// sendGetRequest();
var datta = [];
console.log(datta);

export var data = {
  "2021-01-01 00:00:00 -0800": 1,
  "2019-06-01 00:00:00 -0800": 0.5,
  "2020-01-01 00:01:00 -0800": 2,
};
