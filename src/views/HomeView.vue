<template>
  <dashboard />
</template>

<script lang="ts">
import Vue from "vue";
import Dashboard from "../pages/Dashboard.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    Dashboard,
  },
});
</script>
