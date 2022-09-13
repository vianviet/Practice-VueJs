<template>
  <div class="d-flex sidebar-main" :class="!isMobile && 'position-fixed'">
    <v-navigation-drawer
      style="position = 'fixed';"
      v-model="drawer"
      :mini-variant.sync="isMini"
      :permanent="!isMobile"
      :absolute="isMobile"
      :temporary="isMobile"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-icon>mdi-laptop</v-icon>
        </v-list-item-avatar>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item-content>
        <h1>UI ELEMENTS</h1>
      </v-list-item-content>
      <v-list dense>
        <v-list-item v-for="item in items1" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-icon>{{ item.haveChevron && "mdi-chevron-right" }}</v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-item>
        <h1>ICONS</h1>
      </v-list-item>
      <v-list dense>
        <v-list-item v-for="item in items2" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-icon>{{ item.haveChevron && "mdi-chevron-right" }}</v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-item>
        <h1>EXTRAS</h1>
      </v-list-item>
      <v-list dense>
        <v-list-item v-for="item in items3" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-icon>{{ item.haveChevron && "mdi-chevron-right" }}</v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "side-bar",
  props: {
    miniSidebar: Boolean,
    isMobile: Boolean,
  },
  data() {
    return {
      drawer: null,
      items1: [
        {
          title: "Components",
          icon: "mdi-cogs",
          subNav: [
            {
              title: "Button",
              path: "/button",
              icon: "gesture-tap-button",
            },
            {
              title: "Badges",
              path: "/badge",
              icon: "police-badge-outline",
            },
            {
              title: "Cards",
              path: "/card",
              icon: "card-multiple",
            },
          ],
        },
        {
          title: "Table",
          icon: "mdi-table-large",
          subNav: [
            {
              title: "Basic Table",
              path: "/basic",
              icon: "table-large",
            },
            {
              title: "Data Table",
              path: "/data",
              icon: "database-outline",
            },
          ],
        },
        {
          title: "Form",
          icon: "mdi-form-select",
          subNav: [
            {
              title: "Basic Table",
              path: "/basic",
              icon: "table-large",
            },
            {
              title: "Data Table",
              path: "/data",
              icon: "database-outline",
            },
          ],
        },
      ],
      items2: [
        {
          title: "Icons",
          path: "/icon",
          icon: "mdi-cog-outline",
          subNav: [
            {
              title: "Font Awesome",
              path: "/font-awesome",
              icon: "connection",
            },
            {
              title: "Themefy Icons",
              path: "/themefy icons",
              icon: "connection",
            },
          ],
        },
        {
          title: "Maps",
          path: "/map",
          icon: "marker-multiple",
          subNav: [
            {
              title: "Google map",
              path: "/google-map",
              icon: "map-search-outline",
            },
            {
              title: "Vector Maps",
              path: "/vector-map",
              icon: "vector-curve",
            },
          ],
        },
        {
          title: "Charts",
          path: "/chart",
          icon: "mdi-chart-areaspline",
          subNav: [
            {
              title: "Chart JS",
              path: "/chart-js",
              icon: "chart-bell-curve-cumulative",
            },
            {
              title: "Flot Chart",
              path: "/flot-chart",
              icon: "chart-timeline-variant-shimmer",
            },
            {
              title: "Peity Chart",
              path: "/peity-chart",
              icon: "chart-box-outline",
            },
          ],
        },
      ],
      items3: [
        {
          title: "Pages",
          path: "/page",
          icon: "mdi-book-open-page-variant",
          subNav: [],
        },
      ],
    };
  },
  computed: {
    isMini() {
      return this.miniSidebar;
    },
  },
};
</script>

<style lang="scss">
.position-fixed {
  position: absolute;
}
</style>
