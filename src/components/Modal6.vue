<template>

<div>
<div class="container">  
    <div id="myModal6" class="modal" name="initial">
        <div class="modal-content">
            
            <h2>It goes down the wire</h2>
            <center>
                <canvas id="myChart6" width="500px" height="300px" style="width: 500px; height:300px;"></canvas>
            </center>
            <br>
            <div>
                
                    <li>More than 80% of the games end in the last two overs</li>
                    <li>It's rare for a game to end before 15th over </li>
                    <li>Infact most of the knock-outs and finals go down the wire</li>
                    <li>IPL truly is a clash of heavyweights</li>
                
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
           chartData : chartData[6]
        
        }
    },
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal6');
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
        this.createChart('myChart6', this.chartData) 
    }   
}
</script>

