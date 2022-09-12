<template>
  <v-row no-gutters class="header">
    <v-col
      lg="3"
      cols="12"
      xs="12"
      sm="4"
      md="4"
      class="header__left header__row"
    >
      <router-link :to="{ name: 'home' }"
        ><img src="https://technext.github.io/elaadmin/images/logo.png"
      /></router-link>
      <v-icon>mdi-menu</v-icon>
    </v-col>
    <v-col
      lg="9"
      cols="12"
      xs="12"
      sm="8"
      md="8"
      class="header__right header__row"
    >
      <v-badge color="#49A342" bordered bottom dot overlap>
        <img
          :style="{
            width: '40px!important',
            height: '40px!important',
            borderRadius: '50%',
          }"
          src="https://technext.github.io/elaadmin/images/admin.jpg"
        />
      </v-badge>
      <v-badge content="4" color="#007BFF" bordered overlap>
        <v-icon color="rgb(153,171,180)">mdi-email</v-icon>
      </v-badge>
      <v-badge content="3" color="#DC3545" bordered overlap>
        <v-icon color="rgb(153,171,180)">mdi-bell</v-icon>
      </v-badge>
      <v-icon color="rgb(153,171,180)">mdi-magnify</v-icon>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  name: "HeaderPage",
  data() {
    return {
      breakpoint: "",
    };
  },
  updated() {
    console.log(this.$vuetify.breakpoint.name);
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  &__row {
    border-bottom: 1px solid silver;
    height: 56px;
    display: flex;
    align-items: center;
    padding-right: 20px !important;
  }
  &__left {
    // max-width: 200px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px !important;
    // gap: 200px;
  }
  &__right {
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    gap: 30px;
    .v-badge {
      line-height: 0 !important;
    }
  }
  img {
    max-width: 145px;
  }
}
.row {
  flex: 0 !important;
}
</style>
