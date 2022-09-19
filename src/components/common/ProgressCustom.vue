<template>
  <div class="progress-item">
    <p class="progress-item">{{ title }}</p>
    <p class="progress-info">
      {{ info }}
    </p>
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

<style lang="scss" scoped></style>
