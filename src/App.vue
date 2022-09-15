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
      <div :class="handleChangeSize">
        <router-view />
      </div>
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
  computed: {
    handleChangeSize() {
      if (this.miniSidebar) {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "main__xs__mb";
          case "sm":
            return "main__sm__mb";
          case "lg":
            return "main__lg__mb";
          case "md":
            return "main__md__mb";
          default:
            return "main__xl__mb";
        }
      } else {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "main__xs";
          case "sm":
            return "main__sm";
          case "lg":
            return "main__lg";
          case "md":
            return "main__md";
          default:
            return "main__xl";
        }
      }
    },
  },
  // updated() {
  //   console.log("mimi", this.$vuetify.breakpoint.name);
  // },
});
</script>

<style lang="scss">
.v-main {
  position: absolute;
  top: 56px;
  width: 100%;
}
.main {
  &__xl {
    padding: 10px 10px;
    margin-left: 256px;
    &__mb {
      padding: 10px 10px;
      margin-left: 56px;
    }
  }
  &__md {
    padding: 10px 10px;
    margin-left: 256px;
    &__mb {
      padding: 10px 10px;
      margin-left: 56px;
    }
  }
  &__md {
    padding: 10px 10px;
    margin-left: 256px;
    &__mb {
      padding: 10px 10px;
      margin-left: 56px;
    }
  }
  &__sm {
    padding: 10px 10px;
    margin-left: 256px;
    &__mb {
      padding: 10px 10px;
      margin-left: 56px;
    }
  }
  &__lg {
    padding: 10px 10px;
    margin-left: 256px;
    &__mb {
      padding: 10px 10px;
      margin-left: 56px;
    }
  }
  &__xs {
    padding: 10px 10px;
    margin-top: 50px;
    &__mb {
      padding: 10px 10px;
      margin-top: 50px;
    }
  }
}
</style>
