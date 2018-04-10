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
                        <Modal0 :id="0"></Modal0>
                    </div>
                </div>
            </div>
            

            <div class="col-md-4 outer" >
                <div class="card flip" style="width:400px">
                    
                    <div class="card-body front face">
                        <h3 class="card-title">Is toss the boss?</h3>
                    </div>

                    <div class="card-body back face">
                        <h6 class="card-title">Usually Cricket becomes a game of toss. But not with IPL. It has a pretty even balance when it comes to toss and winning team.</h6>
                        <a v-on:click="onClickOpen('1')"  class="btn btn-primary">Analyse</a>
                        <Modal1></Modal1>
                    </div>
                </div>
            </div>

            <div class="col-md-4 outer" >
                <div class="card flip" style="width:400px">
                    
                    <div class="card-body front face">
                        <h3 class="card-title">T 20's are biased towards teams batting second. Is IPL too?</h3>
                    </div>

                    <div class="card-body back face">
                        <h6 class="card-title">Another striking feature of IPL is that it's unbiased towards teams batting second. Usually in t-20s team batting second have an upper edge, but not with IPL</h6>
                        <a v-on:click="onClickOpen('2')"  class="btn btn-primary">Analyse</a>
                        <Modal2></Modal2>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" style="padding:40px;">

            <div class="col-md-4 outer" >
                <div class="card flip" style="width:400px">
                    
                    <div class="card-body front face">
                        <h3 class="card-title">Cricket!! It's a Bore</h3>
                    </div>

                    <div class="card-body back face">
                        <h6 class="card-title">Cricket is often criticised as a boring game for lack of action. Ipl changes that. Look at the analysis</h6>
                        <a v-on:click="onClickOpen('3')"  class="btn btn-primary">Analyse</a>
                        <Modal3></Modal3>
                    </div>
                </div>
            </div>

            <div class="col-md-4 outer" >
                <div class="card flip" style="width:400px">
                    
                    <div class="card-body front face">
                        <h3 class="card-title">A truly global league</h3>
                    </div>

                    <div class="card-body back face">
                        <h6 class="card-title">Players from almost every cricket playing nation, plays in the IPL</h6>
                        <a v-on:click="onClickOpen('4')"  class="btn btn-primary">Analyse</a>
                        <Modal4></Modal4>
                    </div>
                </div>
            </div>

            <div class="col-md-4 outer" >
                <div class="card flip" style="width:400px">
                    
                    <div class="card-body front face">
                        <h3 class="card-title">Does it help India?</h3>
                    </div>

                    <div class="card-body back face">
                        <h6 class="card-title">Almost half of the players in IPL are Indian</h6>
                        <a v-on:click="onClickOpen('5')"  class="btn btn-primary">Analyse</a>
                        <Modal5></Modal5>
                    </div>
                </div>
            </div>

        </div>

        <div class="row" style="padding:40px;">
            <div class="col-md-1" >
            </div>
            <div class="col-md-10" >
            <Carousel></Carousel>
            </div>
            <div class="col-md-1" >
            </div>
        </div>

        <div class="row" style="padding:40px;">
            <div class="col-md-6 outer" >
                <div class="card flip" style="width:400px">
                    
                    <div class="card-body front face">
                        <h3 class="card-title">Nail Biting Finish almost guaranteed!</h3>
                    </div>

                    <div class="card-body back face">
                        <h6 class="card-title">More than 90% of the games end in last over</h6>
                        <a v-on:click="onClickOpen('6')"  class="btn btn-primary">Analyse</a>
                        <Modal6></Modal6>
                    </div>

                </div>
            </div>

            <div class="col-md-6 outer" >
                <div class="card flip" style="width:400px">
                    
                    <div class="card-body front face">
                        <h3 class="card-title">Fantastic Score Distribution</h3>
                    </div>

                    <div class="card-body back face">
                        <h6 class="card-title">More than 90% of the games end in last over</h6>
                        <a v-on:click="onClickOpen('7')"  class="btn btn-primary">Analyse</a>
                        <Modal7></Modal7>
                    </div>

                </div>
            </div>

        </div>

        
            <div class="row" style="padding:40px;">
                <div class="col-md-4 ">
                    <Btn1></Btn1>
                </div>
                <div class="col-md-4 ">
                    <Btn2></Btn2> 
                </div>
                <div class="col-md-4 ">
                    <Btn3></Btn3>
                </div>
            </div>

            <div class="row" style="padding:40px;">    
                <div class="col-md-6 ">
                    <Btn4></Btn4>
                </div>
                <div class="col-md-6 ">
                    <Btn5></Btn5>
                </div>
            </div>

            <div class="row" style="padding:40px;">
                <div class="col-md-4 ">
                    <Btn6></Btn6>
                </div>
                <div class="col-md-4 ">
                    <Btn7></Btn7>
                </div>
                <div class="col-md-4 ">
                    <Btn8></Btn8>
                </div>
            </div> 

        </div>
    </div>

</template>

<script>
import Chart from 'chart.js';
import chartData from './chartdata.js';
import Modal0 from './components/Modal0.vue';
import Modal1 from './components/Modal1.vue';
import Modal2 from './components/Modal2.vue';
import Modal3 from './components/Modal3.vue';
import Modal4 from './components/Modal4.vue';
import Modal5 from './components/Modal5.vue';
import Modal6 from './components/Modal6.vue';
import Modal7 from './components/Modal7.vue';
import Carousel from './components/Carousel.vue';
import Btn1 from './components/Button1.vue';
import Btn2 from './components/Button2.vue';
import Btn3 from './components/Button3.vue';
import Btn4 from './components/Button4.vue';
import Btn5 from './components/Button5.vue';
import Btn6 from './components/Button6.vue';
import Btn7 from './components/Button7.vue';
import Btn8 from './components/Button8.vue';

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
            console.log(id);
            var modal = document.getElementById(`myModal${id}`);
            console.log(modal);
            modal.style.display = "block";
            document.body.appendChild(modal);
        }
    },
    created() {
         var modal = document.getElementById('myModal');
        window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
    }
}
    },
 
  components: {
      Modal0,
      Modal1,
      Modal2,
      Modal3,
      Modal4,
      Modal5,
      Modal6,
      Modal7,
      Carousel,
      Btn1,
      Btn2,
      Btn3,
      Btn4,
      Btn5,
      Btn6,
      Btn7,
      Btn8
  }
}
</script>
