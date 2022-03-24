<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
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
    <div class="chart-3">
      <div><p class="chart-3__p"></p></div>
      <div class="row">
        <div class="col-1">
          <div class="fixed">
            <p class="tiltle-pie">PHI Vs Other Sectors</p>
            <Phivsother class="chrt-pie"> </Phivsother>
          </div>
          <div class="contain">
            <div class="col-3">
              <h3 style="color: #26bbe3; text-shadow: 2px 1px #000">Aproved</h3>
              <div class="icon-container">
                <p
                  v-for="(n, index) in 30"
                  :key="n"
                  :class="[`aprove--${index <= aproved ? index : ''}`]"
                >
                  <font-awesome-icon icon="fa-solid fa-person" />
                </p>
              </div>
            </div>
            <div class="col-4">
              <h3 style="color: #935ccb; text-shadow: 2px 1px #000">
                Rejected
              </h3>
              <div class="icon-container">
                <p
                  v-for="(n, index) in 30"
                  :key="n"
                  :class="[`reject--${index <= rejectd ? index : ''}`]"
                >
                  <font-awesome-icon icon="fa-solid fa-person" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2">
          <p>Product Share</p>
          <phicom />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);
import PatentPerPetient from "@/components/charts/PatentPerPetient.vue";
import PatentPerProduct from "@/components/charts/PatentPerProduct.vue";
import PatentPerPyer from "@/components/charts/PatentPerPyer.vue";
import NavRight from "@/components/NavRight.vue";
import phicom from "@/components/charts/PhiCom.vue";
import Phivsother from "@/charts/Phivsother.vue";

export default {
  name: "AdminDash",
  components: {
    PatentPerPetient,
    PatentPerProduct,
    PatentPerPyer,
    NavRight,
    phicom,
    Phivsother,
  },
  data() {
    return {
      aproved: 15,
      rejectd: 5,
    };
  },
  computed: {},
};
</script>
<style lang="scss">
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
.chart-3 {
  width: 100%;
  text-align: center;

  &__p {
    font-size: 20px;
  }
  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    padding: 10px 5rem;
    .col-2 {
      margin-right: 20px;
    }
    .col-2,
    .col-1 {
      border-radius: 20px !important;
      width: 30%;
      background: #ddd;

      & p {
        font-size: 20px;
        text-align: start;
        padding: 10px;
      }
      .fixed {
        display: flex;
        flex-direction: column;
        width: 100%;
        .tiltle-pie {
          font-weight: bolder;
          color: #777;
        }
      }
    }
    .col-1 {
      width: 50%;
      // margin-left: 20px;
      display: flex;
      flex-direction: row;

      .chrt-pie {
        width: 100%;
      }
      .contain {
        display: flex;
        flex-direction: column;
        width: 50%;

        .col-3 {
          background-color: #fff;
          min-width: 100% !important;
          width: 100% !important;
          height: 100%;
          border-radius: 20px !important;
          .icon-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            align-items: center;
            p {
              display: block;
              margin: 0 !important;
              padding: 5px;
              color: #777;
            }
          }
        }
        .col-4 {
          background-color: #fff;
          width: 100%;
          height: 100%;
          border-radius: 20px !important;
          .icon-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            align-items: center;
            p {
              display: block;
              margin: 0 !important;
              padding: 5px;
              color: #777;
            }
          }
        }
      }
    }
  }
}
@for $i from 0 through 30 {
  .aprove--#{$i} {
    color: #26bbe3 !important;
  }
  .reject--#{$i} {
    color: #935ccb !important;
  }
}
</style>
