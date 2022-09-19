<template>
  <div class="traffic-home">
    <b>Traffic</b>
    <v-container>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>
        <v-col cols="12" md="8">
          <v-card class="pa-2"><LeftTraffic /></v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-2"> <RightTraffic /> </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LeftTraffic from "../components/Trafic/LeftTraffic.vue";
import RightTraffic from "../components/Trafic/RightTraffic.vue";
export default {
  name: "TrafficHome",
  components: { LeftTraffic, RightTraffic },
};
</script>

<style lang="scss" scoped>
.traffic-home {
  background-color: #fff;
  padding: 1.25em;
  margin: 2rem 0;
}
</style>
