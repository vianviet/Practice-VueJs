<template>
  <div class="search">
    <input autofocus placeholder="Search..." type="text" />
    <v-icon
      color="white"
      small
      @click="$store.commit('changeOpenSearch', false)"
      >mdi-close</v-icon
    >
  </div>
</template>

<script>
export default {
  name: "search-component",
};
</script>

<style lang="scss">
.search {
  z-index: 3;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  bottom: 30;
  background-color: #131c21;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px 0px;
  input {
    width: 50%;
    height: 35px;
    color: silver;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
  i {
    cursor: pointer;
  }
}
</style>
