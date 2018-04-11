<template>

<div>
<div class="container">  
    <div id="myModal4" class="modal" name="initial">
        <div class="modal-content">
            
            <h2>All around the Globe</h2>
            <center>
                <canvas id="myChart4" width="600px" height="300px" style="width: 600px; height:300px;"></canvas>
            </center>
            <br>
            <div>
                
                    <li>Even though most players are domestic, every test playing nation has a player playing in IPL</li>
                    <li>The foreign limited player policy should also be kept in mind </li>
                    <li>Nevertheless it's a vibrant tournament with mixtures of many sporting cultures</li>
                
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
           chartData : chartData[4]
        
        }
    },
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal4');

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
        this.createChart('myChart4', this.chartData) 
    }   
}
</script>

