<template>
  <div>
    <br />
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker :key="index" v-for="(m, index) in markers" />
      <!-- :position="m.position"
        @click="center = m.position" -->
    </GmapMap>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GoogleMap",
  data() {
    return {
      center: {},
      markers: [],
      places: [],
    };
  },
  async mounted() {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    const resp = await axios.get(
      "https://home.phi-pt.cat-sw.com/api/admin/cities",
      {
        header: {
          Authorization: "Bearer" + token,
        },
      }
    );
    const Phi = await resp.data.data;
    const cairo = await JSON.parse(resp.data.data[0].position);
    // console.log(cairo);
    const mp = await Phi.filter((f) => f.name != "Cairo").map(
      (doc) => doc.position
    );
    const finale = JSON.parse(...mp);
    // console.log(finale);
    this.center = cairo;
    this.markers = [finale];
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
