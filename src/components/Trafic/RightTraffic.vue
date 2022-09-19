<template>
  <div>
    <progress-custom
      title="Visits"
      info="info1"
      value="35"
      progressColor="green"
    />
    <progress-custom
      title="Bounce Rate"
      info="info2"
      value="15"
      progressColor="purple"
    />
    <progress-custom
      title="Unique Visitors"
      info="info"
      value="60"
      progressColor="blue"
    />
    <progress-custom
      title="Targeted Visitors"
      info="99,658 users (90%)"
      value="80"
      progressColor="green"
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
