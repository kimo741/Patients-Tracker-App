<template>
  <div>
    <login />
  </div>
</template>

<script>
// @ is an alias to /src
import login from "@/components/login.vue";

export default {
  name: "Home",
  components: {
    login,
  },
  data() {
    return {
      Email: "",
      Password: null,
    };
  },
};
</script>

>
