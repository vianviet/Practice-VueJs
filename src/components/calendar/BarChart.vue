<template>
  <div class="chart-container" style="width: 100%">
    <BarChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Bar as BarChartGenerator } from "vue-chartjs/legacy";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "bar-chart",
  components: {
    BarChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "hahahaha",
    },
    datasetIdKey: {
      type: String,
      default: "bel",
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 180,
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
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Dataset 1",
            data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            backgroundColor: "red",
            stack: "Stack 0",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    };
  },
};
</script>
