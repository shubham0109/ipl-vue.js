<template>
<div>
<div class="container">  
    <div id="myModal1" class="modal" name="initial">
        <div class="modal-content">
            
            <h2>Does Toss Matters?</h2>
            <center>
                <canvas id="myChart1" width="300px" height="300px" style="width: 300px; height:300px;"></canvas>
            </center>
            <br>
            <div>
                
                    <li>IPL is probably the only tournament where toss simply doesn't matter</li>
                    <li>The win percentage is absolutely even </li>
                    <li>291 times the toss winners ended up as match winners</li>
                    <li>Whereas 286 times toss losers end up as match winners</li>
                
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
            chartData : chartData[1],
            
        }
    },
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal1');

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
        this.createChart('myChart1', this.chartData)
        
    }  
}
</script>

