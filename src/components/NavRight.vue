<template>
  <div class="container">
    <div class="nav__right">
      <ul class="nav__right--ul">
        <li><p>link</p></li>
        <li><p>link</p></li>
        <li><p>link</p></li>
        <li><p>link</p></li>
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
  height: 50%;
  max-height: 60%;
  right: 5px;
  border-radius: 30px;

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

    & li {
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
  }
}
// }
</style>
