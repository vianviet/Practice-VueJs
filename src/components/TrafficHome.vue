<template>
  <div class="traffic pb-10">
    <div class="traffic__title">Traffic</div>
    <v-container>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>
        <v-col cols="12" md="9" lg="9">
          <LeftTraffic />
        </v-col>
        <v-col cols="12" md="3" lg="3">
          <RightTraffic />
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

<style lang="scss">
.traffic {
  background-color: #fff;
  margin: 2rem 0;
  border-radius: 10px;
  &__title {
    font-weight: 600;
    padding: 20px;
  }
}
</style>
