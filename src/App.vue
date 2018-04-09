<template>
<div id="app">
    <h3>{{title}}</h3>
    <div class="container-fluid">
        
        <div class="row" style="padding:40px;">

            <div class="col-md-4 outer" >
                <div class="card flip" style="width:400px">
                    
                    <div class="card-body front face">
                        <h3 class="card-title">It's the most exciting league in the World!!</h3>
                    </div>

                    <div class="card-body back face">
                        <h6 class="card-title">Almost 60% of the runs scored are in boundaries</h6>
                        <a v-on:click="onClickOpen('0')"  class="btn btn-primary">Analyse</a>
                        <Modal :id="0"></Modal>
                    </div>
                </div>
            </div>
            

            <div class="col-md-4 outer" ontouchstart="this.classList.toggle('hover');">
                <div class="card flip" style="width:400px">
                    
                    <div class="card-body front face">
                        <h3 class="card-title">Is toss the boss?</h3>
                    </div>

                    <div class="card-body back face">
                        <h6 class="card-title">Usually Cricket becomes a game of toss. But not with IPL. It has a pretty even balance when it comes to toss.</h6>
                        <a :id="1" v-on:click="onClickOpen('0')"  class="btn btn-primary">Analyse</a>
                        
                    </div>
                </div>
            </div>

            <div class="col-md-4">

            </div>
        </div>

        <div class="row">

            <div class="col-md-8">
                <div class="card">
                    <img class="card-img-top" src="img_avatar1.png" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                        <p class="card-text">Some example text.dfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhffjffjfjfj</p>
                     <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">.col-md-4</div>
        </div>
    </div>
</div>
</template>

<script>
import Chart from 'chart.js';
import chartData from './chartdata.js';
import Modal from './components/Modal.vue';

export default {
  name: 'app',
  data() {
      return {
        title:"INDIAN PREMIER LEAGUE",
        id_array: [1,13,14],
    //    chartData : chartData
      }
  },
  props:["id"],
  methods: {
        flipped: function() {
            $(function(){
                $(".back").show();
                $(".flip").flip({
                    trigger:'hover',
                    axis:'x',
                    speed:500
                });
            });
        },
        /*createChart(chartId, chartData) {
            console.log("id: ", chartId);
            console.log("data: ", chartData);
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options,
            });
        },*/
        onClickOpen(id) {
            var modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.body.appendChild(modal);
        }
    },
 
  components: {
      Modal
  }
}
</script>
