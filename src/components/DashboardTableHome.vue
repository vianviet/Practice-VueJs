<template>
  <div class="table-home">
    <v-row>
      <v-col cols="12" md="12" lg="8">
        <div class="table-home__title"><h4>Orders</h4></div>
        <dashboad-table></dashboad-table>
      </v-col>
      <v-col cols="12" md="12" lg="4">
        <v-row>
          <v-col cols="12" md="6" lg="12">
            <v-card class="pa-2">
              <doughnut />
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="12">
            <v-card class="pa-2" style="background-color: #03a9f3">
              <chart-one-line />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DashboadTable from "../components/DashboardTable/DashboardTable.vue";
import ChartOneLine from "./DashboardTable/ChartOneLine.vue";
import Doughnut from "./DashboardTable/Doughnut.vue";

export default {
  name: "dashboard-table",
  components: {
    DashboadTable,
    Doughnut,
    ChartOneLine,
  },
};
</script>
, ChartOneLine
<style lang="scss">
.table-home {
  &__title {
    padding: 20px 20px;
    background-color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &__right {
    &__box {
      //   padding: 0 !important;
      background-color: white;
      border-radius: 10px;
    }
  }
}
</style>
