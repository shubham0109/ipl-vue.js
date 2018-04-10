<template>
<div>
<div class="container">  
    <div id="myModal1" class="modal" name="initial">
        <div class="modal-content">
            <span v-on:click="onClickClose" class="close">&times;</span>
            <h2>Toss Matters?</h2>
            <center>
                <canvas id="myChart1" width="200px" height="200px" style="width: 200px; height:200px;"></canvas>
            </center>
            <br>
            <div>
                <ul>
                    <li>58% of the runs scored are in boundaries</li>
                    <li>It's one of the highest boundary percentage of any league. </li>
                </ul>
            </div>
        </div>
    </div> 
</div>
</div>
</template>

<script>
import chartData from '../chartdata.js';
//import Chart from './Charts.vue';

export default {
    data() {
        return {
            chartData : chartData[1],
            id_array : [0, 1, 2, 3, 4]
        }
    },
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal1');

            modal.style.display = "none";
        },
        
        createChart(chartId, chartData) {
            console.log("id: ", chartId);
            console.log("data: ", chartData);
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        }
    },
    mounted() {
        this.createChart('myChart1', this.chartData)
        //this.totalCompetetions ();
    }  
}
</script>

