<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 1,
    }"
    min-height="200"
    transition="scroll-x-transition"
  >
    <div class="calendar-home">
      <v-row>
        <v-col cols="12" md="4" lg="4">
          <v-card class="py-5 px-2"
            ><calendar-component></calendar-component
          ></v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <v-card class="">
            <bar-chart />
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <v-card class="pa2">
            <div class="pa-2">Wheater</div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-lazy>
</template>

<script>
import BarChart from "./calendar/BarChart.vue";
import CalendarComponent from "./calendar/CalendarComponent.vue";
export default {
  components: { CalendarComponent, BarChart },
  name: "calendar-home",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
