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
          />
        </v-card>
      </v-col>
    </v-row>
    <traffic-home />
  </div>
</template>

<script>
import TrafficHome from "@/components/TrafficHome.vue";
import CustomCard from "../components/common/CustomCard.vue";
import animateNumber from "../util/animateNumber";
export default {
  components: { CustomCard, TrafficHome },
  data() {
    return {
      cardItems: [
        {
          iconColor: "green",
          icon: "mdi-cash",
          cardTitle: `$${0}`,
          cardSubtitle: "Revenue",
          iconSize: 50,
        },
        {
          iconColor: "purple",
          icon: "mdi-cart",
          cardTitle: `${0}`,
          cardSubtitle: "Sales",
          iconSize: 50,
        },
        {
          iconColor: "blue",
          icon: "mdi-cog-outline",
          cardTitle: `${0}`,
          cardSubtitle: "Templates",
          iconSize: 50,
        },
        {
          iconColor: "orange",
          icon: "mdi-cash",
          cardTitle: `${0}`,
          cardSubtitle: "Clients",
          iconSize: 50,
        },
      ],
    };
  },
  name: "dash-board",
  created() {
    animateNumber(23569, 3000, 10, (data) => {
      this.cardItems[0].cardTitle = `$${data}`;
    });
    animateNumber(3435, 3000, 10, (data) => {
      this.cardItems[1].cardTitle = `${data}`;
    });
    animateNumber(349, 3000, 10, (data) => {
      this.cardItems[2].cardTitle = `${data}`;
    });
    animateNumber(2986, 3000, 10, (data) => {
      this.cardItems[3].cardTitle = `${data}`;
    });
  },
};
</script>

<style lang="scss">
.col-card {
  //   padding: 0 !important;
}
</style>
