<template>
  <div class="d-flex align-center justify-space-between">
    <div class="content__left d-flex align-center">
      <v-checkbox v-model="checkbox"></v-checkbox>
      <div
        @click="checkbox = !checkbox"
        :class="checkbox ? 'text-decoration-line-through' : ''"
        class="text"
      >
        {{ text }}
      </div>
    </div>
    <div class="content__right">
      <v-icon class="icon-size">mdi-check</v-icon>
      <v-icon class="icon-size">mdi-pencil</v-icon>
      <v-icon class="icon-size">mdi-close</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    text: String,
  },
  data() {
    return {
      checkbox: false,
    };
  },
};
</script>

<style lang="scss">
.text {
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.icon-size {
  font-size: 20px !important;
}
</style>
