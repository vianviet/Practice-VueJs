<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark> -->
    <HeaderPage></HeaderPage>
    <!-- </v-app-bar> -->

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderPage from "./components/Header/HeaderPage.vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
  components: { HeaderPage },
});
</script>
