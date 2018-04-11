<template>
<div>
<div>
<div class="container">  
    <div id="myModal2" class="modal" name="initial">
        <div class="modal-content">
            
            <h2>Wins Distribution</h2>
            <center>
                <canvas id="myChart2" width="300px" height="300px" style="width: 300px; height:300px;"></canvas>
            </center>
            <br>
            <div>
                
                    <li>The game also doesn't assist the chasing side as it often happens in t-20s</li>
                    <li>261 times batting first team has won </li>
                    <li>307 times the chasing team won</li>
                    <li>So quite an even divide here</li>
            </div>
            <br />
            <span v-on:click="onClickClose" class="close">close</span>
        </div>
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
           chartData : chartData[2]
    
        }
    },
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal2');

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
        this.createChart('myChart2', this.chartData) 
    }   
}
</script>

