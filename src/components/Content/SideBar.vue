<template>
  <div class="d-flex">
    <v-navigation-drawer
      style="position = 'fixed';"
      v-model="drawer"
      :mini-variant.sync="miniSideba"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "side-bar",
  props: {
    miniSidebar: Boolean,
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
    };
  },
};
</script>