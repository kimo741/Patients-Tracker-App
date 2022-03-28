<template>
  <div class="ssection">
    <div class="container-3">
      <div class="row-1">
        <!--Start pie chart -->
        <div class="row-1__col-1">
          <PieAnnaly :width="250" :height="250" />
          <div class="rspo">
            <p>1200 <span>patients</span></p>
          </div>
        </div>
        <!--End pie chart -->
        <div class="row-1__col-2">
          <div class="ytd"><p>2021 YTD</p></div>
          <div class="perc">+35%</div>
          <div class="gradient">
            <SingleBar :width="100" :height="100" />
          </div>
        </div>
        <div class="row-1__col-3">
          <div class="grouth-title"><p>2021 GROWTH</p></div>
          <div class="perc">-15%</div>
          <div class="gradient">
            <SingleChartGrouth :width="100" :height="100" />
          </div>
        </div>
      </div>
      <div class="row-2">
        <div>2</div>
        <div>2</div>
        <div>2</div>
      </div>
      <div class="row-3">
        <div>3</div>
        <div>3</div>
      </div>
    </div>
  </div>
</template>
<script>
import PieAnnaly from "@/charts/PieAnnaly.vue";
import SingleBar from "@/charts/SingleBar.vue";
import SingleChartGrouth from "@/charts/SingleChartGrouth.vue";
export default {
  name: "DarzalexNew",
  components: {
    PieAnnaly,
    SingleBar,
    SingleChartGrouth,
  },
};
</script>

<style lang="scss" scoped>
.ssection {
  width: 80vw !important;
  margin: auto;
  margin-top: 7rem;
}
.container-3 {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.row-1,
.row-2,
.row-3 {
  display: flex;
  flex-direction: row;
  width: max-content;

  height: 30rem;
}
.row-1 {
  width: 80vw;
  justify-items: center;
  justify-content: space-evenly;
  align-content: space-around;
  align-items: center;
  &__col-1,
  &__col-2,
  &__col-3 {
    width: (70vw / 3);
    gap: 1;
    background-color: #fff !important;
    padding: 2rem;
    height: 30rem;
  }
  &__col-1 {
    position: relative;

    .rspo {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -40%);
      z-index: 500;
      text-align: center;
      p:first-child {
        font-size: 5rem;
        font-weight: bolder;
        text-shadow: 1px 1px 1px #fff;
        padding: 0 !important;
        span {
          display: block;
          font-size: 2rem;
          font-weight: bold;
          text-shadow: none !important;
        }
      }
    }
  }
  &__col-2 {
    display: flex;
    flex-direction: column;
    .gradient {
      position: relative;
      height: 15px;
      border-radius: 20px;
      &::before {
        content: "2020";
        position: absolute;
        left: 0;
        bottom: -60px;
        font-size: 1rem;
        font-weight: bolder;
        color: #63799b;
      }
      &::after {
        content: "2021";
        position: absolute;
        right: 0;
        bottom: -60px;
        font-size: 1rem;
        font-weight: bolder;
        color: #63799b;
      }
    }
    .ytd {
      font-size: 3rem;
      text-align: start;
      color: #63799b;
    }
    .perc {
      font-size: 6rem;
      color: #43e0aa;
    }
  }
  &__col-3 {
    display: flex;
    flex-direction: column;
    .grouth-title {
      font-size: 3rem;
      text-align: start;
      color: #63799b;
    }
    .perc {
      font-size: 6rem;
      color: #cc1331;
    }
    .gradient {
      position: relative;
      height: 15px;
      border-radius: 20px;
      &::before {
        content: "2020";
        position: absolute;
        left: 0;
        bottom: -60px;
        font-size: 1rem;
        font-weight: bolder;
        color: #63799b;
      }
      &::after {
        content: "LREP";
        position: absolute;
        right: 0;
        bottom: -60px;
        font-size: 1rem;
        font-weight: bolder;
        color: #63799b;
      }
    }
  }
}
</style>
