<template>
  <v-menu
    :nudge-left="40"
    :nudge-bottom="40"
    v-model="showMenu"
    bottom
    style="max-width: 600px; top: 55px !important; left: 1400px !important"
  >
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <slot></slot>
      </div>
    </template>
    <v-list>
      <v-list-title>{{ "Hello" }}</v-list-title>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "menus-component",
  props: {
    items: {
      default: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
