<template>
<div>
<div>
<div class="container">  
    <div id="myModal3" class="modal" name="initial">
        <div class="modal-content">
            
            <h2>Not so many dots eh?</h2>
            <center>
                <canvas id="myChart3" width="300px" height="300px" style="width: 300px; height:300px;"></canvas>
            </center>
            <br>
            <div>
                
                    <li>One annoying thing about cricket is too many dot balls</li>
                    <li>IPL being a shorter and faster format is full of action</li>
                    <li>Almost 60% of the deliveries are scored off</li>
                    <li>So basically you see a shot every other delivery!!</li>
                
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
           chartData : chartData[3]
        
        }
    },
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal3');

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
        this.createChart('myChart3', this.chartData) 
    }   
}
</script>

