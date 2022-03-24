<template>
  <div class="container">
    <div class="nav__right">
      <ul class="nav__right--ul">
        <router-link :to="'/'"><p class="all">All</p> </router-link>
        <router-link :to="'/'"
          ><img src="@/assets/ImageLinks/link-2.png" alt=""
        /></router-link>
        <router-link :to="'/home'"
          ><img src="@/assets/ImageLinks/link-3.png" alt=""
        /></router-link>
        <router-link :to="'/'"
          ><img src="@/assets/ImageLinks/link-4.png" alt=""
        /></router-link>
        <router-link :to="'/'"
          ><img src="@/assets/ImageLinks/link5.png" alt=""
        /></router-link>
        <router-link :to="'/'"
          ><img src="@/assets/ImageLinks/link6.png" alt=""
        /></router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "navright",
};
</script>
<style lang="scss" scoped>
// .container {
//   height: 100vh;
//   align-content: center;
//   justify-content: center;
//   width: 50px;
.nav__right {
  box-sizing: border-box;
  position: fixed;
  background-color: #ddd;
  display: flex;
  justify-items: center;
  align-items: center;
  z-index: 500;
  width: 4%;
  height: 70%;
  right: 5px;
  border-radius: 30px;
  transition: all 1s ease-in-out;

  &:hover {
    background-color: rgba(235, 235, 235, 0.118);
  }

  &--ul {
    margin: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 10px;
    width: 100%;
    justify-content: space-around;
    padding: 0 !important;
    text-align: center !important;

    router-link {
      display: block;
      width: 100%;
      height: max-content;
      margin: auto;
      list-style: none;
      font-size: 15px;
      color: #426eff;
      cursor: pointer;
      font-weight: bold;
    }
    .all {
      margin-left: 5px !important;
      background-color: #426effa4;
      border-radius: 50%;
      overflow: hidden;
      margin: auto;
      padding: 1.2rem;
      color: #fff;
    }
  }
}
// }
</style>
