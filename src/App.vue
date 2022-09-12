<template>
  <v-app>
    <HeaderPage @eventChangeSidebar="changeSideBar"></HeaderPage>
    <v-main>
      <side-bar :data="miniSidebar"> <router-view /></side-bar>
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
  }),
  components: { HeaderPage, SideBar },
  methods: {
    changeSideBar() {
      this.miniSidebar = !this.miniSidebar;
    },
  },
  created() {
    this.$watch("miniSidebar", () => {
      console.log(this.miniSidebar);
    });
  },
});
</script>
