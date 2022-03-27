import Dashboard from "../../views/Dashboard.vue";
import DarzalexNew from "../../views/products/DarzalexNew.vue";
import AdminDash from "../../views/products/AdminDash.vue";

export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      { path: "admindash", name: "AdminDash", component: AdminDash },
      {
        path: "darzalexnew",
        name: "darzalexnew",
        component: DarzalexNew,
      },
    ],
  },
];
