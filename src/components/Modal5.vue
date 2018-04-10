<template>

<div>
<div class="container">  
    <div id="myModal5" class="modal" name="initial">
        <div class="modal-content">
            <span v-on:click="onClickClose" class="close">&times;</span>
            <h2>Country Percentage</h2>
            <center>
                <canvas id="myChart5" width="300px" height="300px" style="width: 300px; height:300px;"></canvas>
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
           chartData : chartData[5]
        //    id_array : [0, 1, 2, 3, 4]
        }
    },
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal5');

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
        this.createChart('myChart5', this.chartData) 
    }   
}
</script>

