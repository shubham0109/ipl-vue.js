<template>
<div class="container">  
    <div id="myModal0" class="modal" name="initial" style="disply: none;">
        <div class="modal-content">
            <span v-on:click="onClickClose" class="close">&times;</span>
            <h2>Runs Distribution</h2>
            <center>
                <!--<Chart
                    v-for="(id, index) in id_array"
                    :id="id" 
                    :key="index"
                    v-if="id === 0">
                </Chart> -->
                <canvas id="myChart0" width="200px" height="200px" style="width: 200px; height:200px;"></canvas>
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
</template>

<script>
import chartData from '../chartdata.js';
//import Chart from './Charts.vue';

export default {
    data() {
        return {
            chartData : chartData[0],
            id_array : [0, 1, 2, 3, 4]
        }
    },
    props: ["id"],
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal0');

            modal.style.display = "none";
        },
        
        totalCompetetions () {
            console.log("heee",this.id);
            return this.id;
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
        this.createChart('myChart0', this.chartData)
        //this.totalCompetetions ();
    } 
}
</script>

