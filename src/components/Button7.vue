<template>
  <div>
    <a href="https://www.iplt20.com/teams/sunrisers-hyderabad" target="_blank">
        <Button  class="btn7">
            <p id="para">Won the IPL twice. 
            Dark horses of the tournament. Not a bad team to cheer for.<br>
            Click to know more
            </p>
        </Button>
    </a>
  </div>
</template>

<style>
.btn7 {
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    background-image: url('../../image/SRHS.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width:250px;
    height:250px;
}

.btn7:hover {
    background:black;
    opacity: 0.6;
}
#para {
    display: none;
    font-size: 10px;
    color: aliceblue;
}

.btn7:hover #para{
    display: block;
}
</style>

