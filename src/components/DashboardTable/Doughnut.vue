<template>
  <div class="chart-container" style="width: 300px; background-color: white">
    <Doughnut
      class="px-5"
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :height="height"
    />
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";
import { Chart, ArcElement, Legend } from "chart.js";
Chart.register(ArcElement, Legend);
// Chart.defaults.showLine = false;
// Chart.defaults.onHover = () => {
//   alert("hello");
// };
// Chart.defaults.datasets.line.spanGaps = true;
console.log("2", Chart.defaults);

export default {
  name: "doughnut-chart",
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 200,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: Object,
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        labels: ["Desktop visits", "Tab visits", "Mobile visits"],
        datasets: [
          {
            backgroundColor: ["#5C6BC0", "#EF5350", "#66BB6A"],
            data: [33.3, 33.3, 33.3],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animateRotate: false,
        },
        cutout: 40,
        plugins: {
          legend: {
            position: "right",
            align: "left",
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.chart-container {
  border-radius: 10px;
}
</style>
