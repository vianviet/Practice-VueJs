<template>
  <v-row no-gutters>
    <div class="header">
      <v-col
        lg="4"
        cols="12"
        xs="12"
        sm="4"
        md="4"
        xl="4"
        class="header__left header__row"
        :class="$vuetify.breakpoint.name === 'xs' && 'justify-space-between'"
      >
        <router-link :to="{ name: 'home' }"
          ><img src="https://technext.github.io/elaadmin/images/logo.png"
        /></router-link>
        <v-icon @click="changeSidebar">mdi-menu</v-icon>
      </v-col>

      <v-col
        xl="8"
        lg="8"
        cols="12"
        xs="12"
        sm="8"
        md="8"
        class="header__right header__row"
        :class="$vuetify.breakpoint.name === 'xs' && 'd-none'"
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
        <v-badge :content="message" color="#007BFF" bordered overlap>
          <v-icon color="rgb(153,171,180)">mdi-email</v-icon>
        </v-badge>
        <v-badge :content="notification" color="#DC3545" bordered overlap>
          <v-icon color="rgb(153,171,180)">mdi-bell</v-icon>
        </v-badge>
        <v-icon color="rgb(153,171,180)">mdi-magnify</v-icon>
      </v-col>
    </div>
    <v-col
      v-show="$vuetify.breakpoint.name === 'xs'"
      xl="10"
      lg="9"
      cols="12"
      xs="12"
      sm="8"
      md="8"
      class="header__right header__row my-15"
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
      <v-badge :content="message" color="#007BFF" bordered overlap>
        <v-icon color="rgb(153,171,180)">mdi-email</v-icon>
      </v-badge>
      <v-badge :content="notification" color="#DC3545" bordered overlap>
        <v-icon color="rgb(153,171,180)">mdi-bell</v-icon>
      </v-badge>
      <v-icon color="rgb(153,171,180)">mdi-magnify</v-icon>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  name: "HeaderPage",
  props: ["drawer"],
  data() {
    return {
      notification: 1,
      message: 1,
    };
  },
  methods: {
    changeSidebar() {
      this.$emit("eventChangeSidebar");
      // this.$emit("eventChangeDrawer");
    },
  },
  created() {
    setTimeout(() => {
      this.notification++;
      setTimeout(() => {
        this.notification++;
      }, 500);
    }, 500);
    setTimeout(() => {
      this.message++;
      setTimeout(() => {
        this.message++;
        setTimeout(() => {
          this.message++;
        }, 500);
      }, 500);
    }, 300);
  },
};
</script>

<style lang="scss">
.header {
  z-index: 2;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  bottom: 30;
  background-color: white;
  &__row {
    border-bottom: 1px solid silver;
    height: 56px;
    display: flex;
    align-items: center;
    padding-right: 20px !important;
  }
  &__left {
    display: flex;
    padding-left: 20px !important;
    gap: 90px;
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
.position-fixed {
  position: fixed;
}
</style>
