<template>
  <div>
    <a href="https://www.rajasthanroyals.com/" target="_blank">
        <Button  class="btn6">
            <p id="para">Won the inagural season of IPL. 
            Good team coming back after suspension<br>
            Click to know more
            </p>
        </Button>
    </a>
  </div>
</template>

<style>
.btn6 {
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    background-image: url('../../image/RRS.png');
    background-repeat: no-repeat;
    background-size: cover;
    width:250px;
    height:250px;
}
.btn6:hover {
    background:black;
    opacity: 0.6;
}
#para {
    display: none;
    font-size: 10px;
    color: aliceblue;
}

.btn6:hover #para{
    display: block;
}
</style>

