<template>
  <div class="d-flex sidebar-main" :class="!isMobile && 'position-fixed'">
    <v-navigation-drawer
      :value="drawer"
      :mini-variant="miniSidebar"
      :permanent="!isMobile"
      :absolute="isMobile"
      :temporary="isMobile"
    >
      <div class="mx-4">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-laptop</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <div v-for="(each, index) in items" :key="index">
          <v-list-item-content :class="miniSidebar && 'd-none'">
            <h4 class="px-4">{{ each.name }}</h4>
          </v-list-item-content>
          <v-list dense>
            <v-list-item
              class="my-3"
              v-for="item in each.data"
              :key="item.title"
              link
            >
              <v-list-group
                no-action
                class="min-width-250"
                append-icon="mdi-chevron-right"
              >
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="subItem in item.subNav"
                  :key="subItem.title"
                  link
                  class="subnav-item justify-start"
                >
                  <v-list-item-icon>
                    <v-icon v-text="`mdi-${subItem.icon}`"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item>
              </v-list-group>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "side-bar",
  // props: {
  //   miniSidebar: Boolean,
  //   isMobile: Boolean,
  //   drawer: {
  //     type: Boolean,
  //     required: true,
  //   },
  // },
  props: ["miniSidebar", "isMobile", "drawer"],
  data() {
    return {
      items: [
        {
          name: "UI ELEMENTS",
          data: [
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
        },
        {
          name: "ICONS",
          data: [
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
              icon: "mdi-map",
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
        },
        {
          name: "EXTRAS",
          data: [
            {
              title: "Pages",
              path: "/page",
              icon: "mdi-book-open-page-variant",
              subNav: [],
            },
          ],
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
.sidebar-main {
  aside {
    min-height: 100vh;
  }
  .v-list {
    padding: 0 !important;
  }
  .subnav-item {
    padding-left: 50px !important;
  }
  .v-list-group
    .v-list-group__header
    .v-list-item__icon.v-list-group__header__append-icon {
    justify-content: flex-start !important;
  }
}
.position-fixed {
  position: fixed;
}
.min-width-250 {
  min-width: 250px;
}
.v-list-item {
  padding: 0 0px;
}
</style>
