<template>
  <v-card class="d-flex sidebar-main" :class="!isMobile && 'position-fixed'">
    <v-navigation-drawer
      v-model="propModel"
      :mini-variant="miniSidebar && !isMobile"
      :permanent="!isMobile"
      :absolute="isMobile"
      :temporary="isMobile"
      :app="isMobile"
      :width="isMobile ? '100%' : 256"
    >
      <v-list dense>
        <div class="mx-4">
          <div v-for="each in items" :key="each.type">
            <v-list-item-content
              v-if="each.name !== null"
              :class="miniSidebar && 'd-none'"
            >
              <h4>{{ each.name }}</h4>
            </v-list-item-content>
            <v-list-item
              active-class="link-active"
              class="my-3"
              v-for="item in each.data"
              :key="item.title"
              :to="item.subNav.length === 0 ? `${item.path}` : null"
              link
            >
              <v-menu offset-x>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-group
                    :value="getPath(item.path)"
                    :key="item.title"
                    v-bind="attrs"
                    v-on="miniSidebar && !isMobile ? on : ''"
                    no-action
                    class="w-100"
                    :append-icon="
                      item.subNav.length > 0 ? 'mdi-chevron-right' : ''
                    "
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
                      :to="`${item.path}${subItem.path}`"
                    >
                      <v-list-item-icon>
                        <v-icon v-text="`mdi-${subItem.icon}`"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-title
                        v-text="subItem.title"
                      ></v-list-item-title>
                    </v-list-item>
                  </v-list-group>
                </template>
                <v-list
                  v-if="item.subNav.length === 0 ? false : true"
                  class="content__menu"
                >
                  <v-list-item class="content__menu__title">
                    {{ item.title }}
                  </v-list-item>
                  <v-list-item
                    v-for="(subItem, index) in item.subNav"
                    :key="index"
                    :to="`${item.path}${subItem.path}`"
                    link
                  >
                    <v-list-item-icon class="content__menu__icon">
                      <v-icon v-text="`mdi-${subItem.icon}`"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title
                      class="content__menu__text"
                      v-text="subItem.title"
                    ></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "side-bar",
  props: ["miniSidebar", "isMobile", "drawer"],
  data() {
    return {
      path: "/",
      items: [
        {
          name: null,
          data: [
            {
              title: "Dashboard",
              icon: "mdi-laptop",
              path: "/home",
              subNav: [],
            },
          ],
        },
        {
          name: "UI ELEMENTS",
          data: [
            {
              title: "Components",
              icon: "mdi-cogs",
              path: "/components",
              subNav: [
                {
                  title: "Button",
                  path: "/button",
                  icon: "gesture-tap-button",
                },
                {
                  title: "Badges",
                  path: "/badges",
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
              path: "/table",
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
              path: "/form",
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
                  path: "/themefy-icons",
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
    propModel: {
      get() {
        return this.drawer || !this.isMobile;
      },
      set(value) {
        this.$emit("eventChangDrawer", value);
      },
    },
  },
  methods: {
    getPath(data) {
      return data === this.path;
    },
  },
  watch: {
    $route(to, from) {
      if (to.matched[0].path !== undefined) {
        this.path = to.matched[0].path;
      } else {
        this.path = "/";
      }
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
.w-100 {
  width: 100%;
}
.position-fixed {
  position: fixed;
}
.v-list-item {
  padding: 0 0px;
}

.v-menu__content {
  width: 180px !important;
  left: 56px !important;
  .v-list {
    padding: 0 !important;
  }
  .v-list-item {
    padding: 0px 10px;
  }
}
.link-active {
  background-color: #ffffff;
}
.content__menu {
  &__title {
    border-bottom: 1px solid #cacacf;
  }
  &__icon {
  }
}
</style>
