<template>
  <div class="chart-container" style="width: 100%; background-color: #03a9f3">
    <div style="color: white" class="ml-2">August 2018</div>
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
  </div>
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";

export default {
  name: "ChartOneLine",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "one-line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
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
            fill: false,
            label: "Data One",
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            data: [0, 32500, 15000, 20000, 15000, 0],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
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
