<template>
  <v-app>
    <HeaderPage
      @eventChangeSidebar="changeSideBar"
      @eventChangDrawer="changeDrawer"
      :drawer.sync="isDrawer"
    ></HeaderPage>
    <v-main>
      <side-bar
        :isMobile="$vuetify.breakpoint.name === 'xs' ? true : false"
        :miniSidebar="miniSidebar"
        :drawer.sync="isDrawer"
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
    isDrawer: false,
  }),
  components: { HeaderPage, SideBar },
  methods: {
    changeSideBar() {
      if (this.$vuetify.breakpoint.name === "xs") {
        this.isDrawer = !this.isDrawer;
      } else {
        this.miniSidebar = !this.miniSidebar;
      }
    },
    changeDrawer(data: any) {
      this.isDrawer = data;
    },
  },
});
</script>

<style lang="scss">
.v-main {
  position: absolute;
  top: 56px;
  width: 100%;
}
</style>
