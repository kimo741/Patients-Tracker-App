<template>
  <div class="respon">
    <div class="side-com">
      <a title="Profile">
        <img title="prifile" src="@/assets/ImageLinks/user.png" />
      </a>
      <a title="Dashbord"> <i class="fas fa-project-diagram"></i> </a>
      <a title="Seting" href="#">
        <font-awesome-icon icon="fa-solid fa-gear" />
      </a>
      <a title="Logout" class="logout" @click="$emit('click')">
        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "aside",
  data() {
    return {
      log: false,
    };
  },
  // methods: {
  //   logout() {
  //     this.log = true;
  //           localStorage.removeItem("haspermetion");
  //     localStorage.removeItem("token");
  //   },
  // },
};
</script>
<style lang="scss">
.respon {
  position: relative;
  .side-com {
    box-sizing: border-box;
    position: absolute;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    // justify-items: center;
    // align-items: center;
    justify-content: space-between !important;
    transition: all 1s ease-in-out;

    z-index: 500;
    width: max-content;
    height: 50rem;
    left: 1rem;
    border-radius: 30px;
    transition: all 3s ease-in-out;
    top: 14rem;
    a {
      position: relative;
      color: rgba(0, 0, 0, 0.664);
      box-shadow: 1px 1px 8px rgba(119, 119, 119, 0.486);
      // &[title]:hover::after {
      //   content: attr(title);
      //   position: absolute;
      //   top: -80%;
      //   right: -100%;
      //   font-size: 1.5rem;
      //   box-shadow: 1px 1px 8px rgba(119, 119, 119, 0.486);
      //   border-radius: 50%;
      //   padding: 1rem;
      //   font-weight: bold;
      // }
    }
    a:hover {
      color: #426eff;
      box-shadow: 1px 1px 8px #426eff;
    }
  }
}
.logout {
  margin-top: 10rem;
  cursor: pointer;
  width: 100%;
}
</style>
