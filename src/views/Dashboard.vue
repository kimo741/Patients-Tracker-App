<template>
  <div>
    <div class="top-side">
      <img class="home__logo" alt="Vue logo" src="../assets/header.png" />
    </div>
    <Aside @click="logout" />
    <nav-right></nav-right>

    <router-view></router-view>
  </div>
</template>
<script>
import NavRight from "@/components/NavRight.vue";
import Aside from "@/components/Side.vue";

export default {
  name: "Dashboard",
  components: {
    NavRight,
    Aside,
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("haspermetion");
      localStorage.removeItem("token");
      this.$router.replace("/");
    },
  },
};
</script>
<style>
.top-side {
  box-shadow: 1px 1px 8px rgba(114, 114, 114, 0.439);
  height: 8rem;
}
</style>
