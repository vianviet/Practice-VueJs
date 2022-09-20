<template>
  <LineChartGenerator
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
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";
import {
  Chart,
  Title,
  Tooltip,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler,
} from "chart.js";
Chart.register(
  Title,
  Tooltip,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler
);
// Chart.defaults.showLine = false;
// Chart.defaults.onHover = () => {
//   alert("hello");
// };
// Chart.defaults.datasets.line.spanGaps = true;
console.log(Chart.defaults);

export default {
  name: "LeftTraffic",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 350,
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
            fill: true,
            label: "Data One",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            // data: [0, 32500, 15000, 20000, 15000, 0],
            data: [0, 0, 0, 0, 0, 0],
            tension: 0.4,
            radius: 0,
          },
          {
            fill: true,
            label: "Data Two",
            backgroundColor: "rgb(141, 151, 211, 0.5)",
            // data: [0, 15000, 27500, 15000, 30000, 5000],
            data: [0, 0, 0, 0, 0, 0],
            tension: 0.4,
            radius: 0,
          },
          {
            fill: true,
            label: "Data Three",
            backgroundColor: "rgb(80, 200, 120, 0.5)",
            data: [0, 15000, 35000, 25000, 22500, 0],
            // data: [0, 0, 0, 0, 0, 0],
            tension: 0.4,
            radius: 0,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  created() {
    setTimeout(() => {
      this.chartData.datasets[0].data = [0, 32500, 15000, 20000, 15000, 0];
      setTimeout(() => {
        this.chartData.datasets[1].data = [0, 15000, 27500, 15000, 30000, 5000];
      }, 1500);
    }, 1500);
  },
};
</script>
