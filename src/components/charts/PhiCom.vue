<template>
  <div>
    <Phivs :width="100" :height="100" />
  </div>
</template>
<script>
import Phivs from "@/charts/PHIvs.vue";
export default {
  name: "phicom",
  components: {
    Phivs,
  },
};
</script>
