import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminRoute from "./AdminProducts/index.js";

Vue.use(VueRouter);

const baseRoute = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];
const routes = [...baseRoute, ...AdminRoute];

//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
//   if (requiresAuth && !auth.currentUser) {
//     next("login");
//   } else {
//     next();
//   }
// });

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async function (to, _, next) {
  var canAccess = await localStorage.getItem("haspermetion");
  if (to.meta.requiresAuth && !canAccess) {
    next("/");
  } else {
    next();
  }
});
export default router;
