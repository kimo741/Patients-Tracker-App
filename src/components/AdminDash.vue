<template>
  <div>
    <div class="wrapper">
      <nav-right> </nav-right>

      <!-- nav section -->
      <aside class="side">
        <a href="#">
          <i class="fas fa-project-diagram"></i>
        </a>
        <a href="#">
          <i class="fas fa-project-diagram"></i>
        </a>
        <a href="#">
          <i class="fas fa-project-diagram"></i>
        </a>
      </aside>
      <!-- first chart container -->
      <PatentPerPetient />

      <!-- second charts container -->
      <div class="chart-2">
        <PatentPerProduct />

        <div class="svg-container">
          <PatentPerPyer />
        </div>
      </div>
    </div>
    <!-- <div class="chart-3">
      <div><p class="chart-3__p">Total patients Per City</p></div>
      <div class="svg-container">dfsdf</div>
    </div> -->
  </div>
</template>
<script>
import PatentPerPetient from "@/components/charts/PatentPerPetient.vue";
import PatentPerProduct from "@/components/charts/PatentPerProduct.vue";
import PatentPerPyer from "@/components/charts/PatentPerPyer.vue";
import NavRight from "@/components/NavRight.vue";

export default {
  name: "AdminDash",
  components: {
    PatentPerPetient,
    PatentPerProduct,
    PatentPerPyer,
    NavRight,
  },
};
</script>
<style>
.Patient-span {
  font-size: 14px;
  text-align: start;
  margin-left: 10px;
}
.per-total {
  text-align: start;
}
.group-png {
  width: 5rem;
  height: 5rem;
}
.num {
  font-size: 50px !important;
}
.per-total {
  font-size: 40px;
}
</style>
