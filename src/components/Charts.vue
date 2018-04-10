<template>
  <canvas id="myChart" width="200px" height="200px" style="width: 200px; height:200px;"></canvas>
</template>

<script>
import chartData from '../chartdata.js';

export default {
    data() {
      return {
        chartData : chartData
      }
    },
    props: ['id'],
    methods: {
        createChart(chartId, chartData, id) {
            console.log("in chart");
            console.log("id: ", id);
            console.log("data: ", chartData[id]);
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData[id].type,
                data: chartData[id].data,
                options: chartData[id].options,
            });
        }
    },
    mounted() {
        this.createChart('myChart', this.chartData, this.id)
    }  
}
</script>

