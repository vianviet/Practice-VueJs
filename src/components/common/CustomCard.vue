<template>
  <v-card class="card-custom" max-width="344" outlined>
    <v-list-item three-line>
      <div class="card-icon">
        <v-icon left v-if="icon" :color="iconColor" :size="iconSize">
          {{ icon }}
        </v-icon>
      </div>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ cardTitle }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ cardSubtitle }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    cardTitle: {
      type: String,
      default: "",
    },
    cardSubtitle: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    iconSize: {
      type: Number,
      default: 16,
    },
    iconColor: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card-custom {
  max-width: inherit !important;
  border: none;
  box-shadow: 0 0 20px rgb(0 0 0 / 8%);
  .v-list-item {
    gap: 20px;
    padding: 0 10px !important;
  }
}
</style>
