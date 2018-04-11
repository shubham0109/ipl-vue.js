<template>
<div class="container">  
    <div id="myModal0" class="modal" name="initial" style="disply: none;">
        <div class="modal-content">
            
            <h2>Runs Distribution</h2>
            <center>
                <canvas id="myChart0" width="300px" height="300px" style="width: 300px; height:300px;"></canvas>
            </center>
            <br>
            <div>
                
                    <li>58% of the runs scored are in boundaries</li>
                    <li>It's one of the highest boundary percentage of any league. </li>
                    <li>More than 20,000 deliveries has been dispatched over the fence till now.</li>
                
            </div>
            <br />
            <span v-on:click="onClickClose" class="close">close</span>
        </div>
    </div> 
</div>
</template>

<script>
import chartData from '../chartdata.js';


export default {
    data() {
        return {
            chartData : chartData[0],
        }
    },
    props: ["id"],
    methods: {
        onClickClose() {
            var modal = document.getElementById('myModal0');
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
        this.createChart('myChart0', this.chartData);

    }
}
</script>

