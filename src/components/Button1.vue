<template>
  <div>
    <a href="http://www.kkr.in/" target="_blank">
        <Button  class="btn1">
          <p id="para">Once an underdog, it is now a genuine force. Owned 
          by SRK they have won the IPL two times.<br>
          Click to know more</p>
        </Button>
    </a>
  </div>
</template>



<style>
.btn1 {
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    background-image: url('../../image/KKRS.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width:250px;
    height:250px;
    color: aliceblue;
}
.btn1:hover {
    background:black;
    opacity: 0.6;
}
#para {
    display: none;
    font-size: 10px;
    color: aliceblue;
}

.btn1:hover #para{
    display: block;
}
</style>



