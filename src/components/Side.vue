<template>
  <div class="respon">
    <aside class="side-com">
      <a href="#">
        <img src="@/assets/ImageLinks/user.png" />
      </a>
      <a href="#">
        <i class="fas fa-project-diagram"></i>
      </a>

      <a href="#"> <font-awesome-icon icon="fa-solid fa-gear" /> </a>
    </aside>
  </div>
</template>
<script>
export default {
  name: "aside",
};
</script>
<style lang="scss">
.respon {
  position: relative;
  .side-com {
    position: absolute;
    top: 8rem;
    left: 2px;
    background-color: #fff;
    padding: 2rem 0.5rem;
    display: flex;
    flex-direction: column;
    flex: 0 1 10rem;
    border-radius: 20px;
  }
}
</style>
