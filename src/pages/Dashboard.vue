<template>
  <div class="home-page">
    <v-row>
      <v-col
        v-for="(item, index) in cardItems"
        :key="index"
        class="col-card"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card outlined>
          <custom-card
            :iconColor="item.iconColor"
            :icon="item.icon"
            :cardTitle="item.cardTitle"
            :cardSubtitle="item.cardSubtitle"
            :iconSize="item.iconSize"
            :dollarSign="item.dollarSign"
          />
        </v-card>
      </v-col>
    </v-row>
    <traffic-home />
    <dashboard-table-home />
    <todo-list-home></todo-list-home>
    <calendar-home></calendar-home>
  </div>
</template>

<script>
import TrafficHome from "@/components/TrafficHome.vue";
import CustomCard from "../components/common/CustomCard.vue";
import animateNumber from "../util/animateNumber";
import DashboardTableHome from "@/components/DashboardTableHome.vue";
import TodoListHome from "@/components/TodoListHome.vue";
import CalendarHome from "@/components/CalendarHome.vue";
export default {
  components: {
    CustomCard,
    TrafficHome,
    DashboardTableHome,
    TodoListHome,
    CalendarHome,
  },
  data() {
    return {
      cardItems: [
        {
          iconColor: "green",
          icon: "mdi-cash",
          cardTitle: "0",
          cardSubtitle: "Revenue",
          iconSize: 50,
          dollarSign: true,
          value: 23569,
        },
        {
          iconColor: "purple",
          icon: "mdi-cart",
          cardTitle: "0",
          cardSubtitle: "Sales",
          iconSize: 50,
          dollarSign: false,
          value: 3435,
        },
        {
          iconColor: "blue",
          icon: "mdi-cog-outline",
          cardTitle: "0",
          cardSubtitle: "Templates",
          iconSize: 50,
          dollarSign: false,
          value: 349,
        },
        {
          iconColor: "orange",
          icon: "mdi-cash",
          cardTitle: "0",
          cardSubtitle: "Clients",
          iconSize: 50,
          dollarSign: false,
          value: 2986,
        },
      ],
    };
  },
  name: "dash-board",
  created() {
    this.cardItems.forEach((each) => {
      animateNumber(each.value, 2000, 10, (data) => {
        each.cardTitle = `${data}`;
      });
    });
  },
};
</script>

<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.col-card {
  //   padding: 0 !important;
}
</style>
