<template>
  <div class="progress-item">
    <div class="progress-item__title">{{ title }}</div>
    <div class="progress-info">
      {{ info }}
    </div>
    <v-progress-linear
      :color="progressColor"
      :value="value"
    ></v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "ProgressCustom",
  props: {
    title: {
      type: String,
      default: "",
    },
    info: {
      //   type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 16,
    },
    progressColor: {
      type: String,
      default: "green",
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  &__title {
    font-size: 1em;
    font-weight: 600;
    color: #868e96;
  }
}
</style>
