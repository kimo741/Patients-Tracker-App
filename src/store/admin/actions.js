import axios from "axios";
export default {
  PatientPerPayers({ commit }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios
      .get("https://home.phi-pt.cat-sw.com/api/admin/main-charts", {
        header: {
          Authorization: "Bearer" + token,
        },
      })
      .then((response) => {
        let patientPayers = response.data.patient_per_payers.data;
        let patientsNum = response.data.number_of_patients.patients_per_year;
        let patientAnalytics = response.data.patient_analytics;
        let patientProducts = response.data.patient_per_products.data;
        let patientCities = response.data.patient_per_cities.data;

        commit("patientPayersM", patientPayers);
        commit("patientsNumM", patientsNum);
        commit("patientAnalyticsM", patientAnalytics);
        commit("patientProductsM", patientProducts);
        commit("patientPcitiesM", patientCities);
        // console.log(patientProducts);
        // console.log(patientsNum);
        // console.log(patientAnalytics);
        // console.log(patientProducts);
        // console.log(patientPayers);
      })
      .catch((error) => console.log(error));
  },
};
