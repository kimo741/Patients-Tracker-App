import Dashboard from "../../views/Dashboard.vue";
import DarzalexNew from "../../views/products/DarzalexNew.vue";
import AdminDash from "../../views/products/AdminDash.vue";

export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "admindash",
        name: "AdminDash",
        component: AdminDash,
        meta: { requiresAuth: true },
      },
      {
        path: "darzalexnew",
        name: "darzalexnew",
        component: DarzalexNew,
        meta: { requiresAuth: true },
      },
    ],
  },
];
