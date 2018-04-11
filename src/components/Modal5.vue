<template>

<div>
<div class="container">  
    <div id="myModal5" class="modal" name="initial">
        <div class="modal-content">
            
            <h2>A theatre for Indian Cricketers</h2>
            <center>
                <canvas id="myChart5" width="300px" height="300px" style="width:300px; height:300px;"></canvas>
            </center>
            <br>
            <div>
                
                    <li>56% of the players in IPL are domestic players</li>
                    <li>It provides them with a stage to showcase their abilities </li>
                    <li>It also provides them good facilities and fat paycheck </li>
                
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
           chartData : chartData[5]
        
        }
    },
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal5');
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
        this.createChart('myChart5', this.chartData) 
    }   
}
</script>

