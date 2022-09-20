<template>
  <div class="traffic__content__right">
    <progress-custom
      title="Visits"
      info="96,930 Users (40%)"
      :value="40"
      progressColor="green"
    />
    <progress-custom
      title="Bounce Rate"
      info="3,220 Users (24%)"
      :value="24"
      progressColor="purple"
    />
    <progress-custom
      title="Unique Visitors"
      info="29,658 Users (60%)"
      :value="60"
      progressColor="blue"
    />
    <progress-custom
      title="Targeted Visitors"
      info="99,658 users (90%)"
      :value="90"
      progressColor="orange"
    />
  </div>
</template>

<script>
import ProgressCustom from "../common/ProgressCustom.vue";
export default {
  name: "RightTraffic",
  components: { ProgressCustom },
};
</script>

<style lang="scss">
.traffic__content__right {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 5px;
}
</style>
