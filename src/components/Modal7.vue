<template>

<div>
<div class="container">  
    <div id="myModal7" class="modal" name="initial">
        <div class="modal-content">
            
            <h2>All Round Scoring</h2>
            <center>
                <canvas id="myChart7" width="300px" height="300px" style="width: 300px; height:300px;"></canvas>
            </center>
            <br>
            <div>
                
                    <li>6000 sixes have been hit till now</li>
                    <li>15000 boundaries have also flown by </li>
                
            </div>
            <br />
            <span v-on:click="onClickClose" class="close">close</span>
        </div>
    </div> 
</div>
</div>

</template>

<script>
import chartData from '../chartdata.js';


export default {
    data() {
        return {
           chartData : chartData[7]
        }
    },
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal7');

            modal.style.display = "none";
        },
        
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        }
    },
    mounted() {
        this.createChart('myChart7', this.chartData) 
    }   
}
</script>

