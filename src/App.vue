<template>
  <v-app>
    <HeaderPage @eventChangeSidebar="changeSideBar"></HeaderPage>
    <v-main>
      <side-bar
        :isMobile="$vuetify.breakpoint.name === 'xs' ? true : false"
        :miniSidebar="miniSidebar"
      >
        >
      </side-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "./components/Content/SideBar.vue";
import HeaderPage from "./components/Header/HeaderPage.vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    miniSidebar: false,
    isDrawer: true,
  }),
  components: { HeaderPage, SideBar },
  methods: {
    changeSideBar() {
      this.miniSidebar = !this.miniSidebar;
    },
  },
});
</script>
