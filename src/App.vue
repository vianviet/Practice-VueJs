<template>
  <v-app class="app">
    <HeaderPage
      @eventChangeSidebar="changeSideBar"
      @eventChangDrawer="changeDrawer"
      :drawer.sync="isDrawer"
    ></HeaderPage>
    <v-main>
      <side-bar
        :isMobile="breakpoint === 'xs' ? true : false"
        :miniSidebar="miniSidebar"
        :drawer.sync="isDrawer"
        @eventChangDrawer="changeDrawer"
      >
      </side-bar>
      <div :class="handleChangeSize" ref="main">
        <router-view />
        <v-btn
          elevation="2"
          fab
          color="pink"
          dark
          fixed
          bottom
          right
          @click="scrollToTop"
        >
          <v-icon>mdi-arrow-up-circle</v-icon>
        </v-btn>
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
    breakpoint: "",
  }),
  components: { HeaderPage, SideBar },
  methods: {
    changeSideBar() {
      if (this.breakpoint === "xs") {
        this.isDrawer = !this.isDrawer;
      } else {
        this.miniSidebar = !this.miniSidebar;
      }
    },
    changeDrawer(data: any) {
      this.isDrawer = data;
    },
    scrollToTop() {
      console.log(this.$refs.main);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  computed: {
    handleChangeSize() {
      if (this.miniSidebar) {
        switch (this.breakpoint) {
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
        switch (this.breakpoint) {
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
  watch: {
    $vuetify: {
      handler(to, from) {
        if (this.breakpoint !== to.breakpoint.name) {
          this.breakpoint = to.breakpoint.name;
          if (this.breakpoint === "sm") {
            this.miniSidebar = true;
          } else {
            this.miniSidebar = false;
          }
        }
      },
      deep: true,
      immediate: true,
    },
  },
  beforeUpdate() {
    if (this.breakpoint !== "xs") this.isDrawer = false;
  },
});
</script>

<style lang="scss">
.move-to-top {
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
  i :hover {
    background-color: red;
  }
}

.title {
  font-weight: 600;
}
.v-main {
  position: absolute;
  top: 56px;
  width: 100%;
  background-color: #f0f1f6 !important;
}
.main {
  &__xl {
    padding: 25px 25px;
    margin-left: 256px;
    &__mb {
      padding: 25px 25px;
      margin-left: 56px;
    }
  }
  &__md {
    padding: 25px 25px;
    margin-left: 256px;
    &__mb {
      padding: 25px 25px;
      margin-left: 56px;
    }
  }
  &__md {
    padding: 25px 25px;
    margin-left: 256px;
    &__mb {
      padding: 25px 25px;
      margin-left: 56px;
    }
  }
  &__sm {
    padding: 25px 25px;
    margin-left: 56px;
    &__mb {
      padding: 25px 25px;
      margin-left: 56px;
    }
  }
  &__lg {
    padding: 25px 25px;
    margin-left: 256px;
    &__mb {
      padding: 25px 25px;
      margin-left: 56px;
    }
  }
  &__xs {
    padding: 25px 25px;
    margin-top: 50px;
    &__mb {
      padding: 25px 25px;
      margin-top: 50px;
    }
  }
}
</style>
