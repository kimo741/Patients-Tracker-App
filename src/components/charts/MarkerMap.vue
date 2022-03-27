<template>
  <div>
    <br />
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      />
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
      currentPlace: null,
      markers: [],
      places: [],
    };
  },
  async mounted() {
    this.geolocate();
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
    let Phi = await resp.data.data;
    let cairo = JSON.parse(resp.data.data[0].position);
    let position = Phi.filter((f) => f.name != "Cairo").map(
      (doc) => doc.position
    );
    let JPosition = position.map((doc) => JSON.parse(doc));

    this.center = cairo;
    this.markers = [...JPosition];
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

// AIzaSyBtGumO_LjPq3jkKkqfJjTOTVA4t2gOvAk
