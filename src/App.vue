<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />

    <router-view />
  </div>
</template>
<script>
export default {
  // created() {
  //   this.$store.dispatch("Admin/PatientPerPayers");
  // },
};
</script>
<style lang="scss">
::-webkit-scrollbar {
  width: 14px;
}
::-webkit-scrollbar-track {
  background: linear-gradient(0deg, #2c77ff 0%, #935ccb 100%);
}
::-webkit-scrollbar-thumb {
  // @import "./src/assets/sass/main.scss";
  background: #b8b8b8;
  border-radius: 20px;
}
#app {
  .selector-for-some-widget {
    box-sizing: content-box;
  }
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f5f7;
}
.home__logo {
  position: absolute;
  top: 0;
  left: 50px;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
