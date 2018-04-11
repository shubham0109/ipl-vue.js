<template>
  <div>
    <a href="https://www.delhidaredevils.com/" target="_blank">
        <Button  class="btn8">
            <span id="para">Solid team. 
            Can win the tournament. Led by Gambhir.<br>
            Click to know more
            </span>
        </Button>
    </a>
  </div>
</template>

<style>
.btn8 {
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    background-image: url('../../image/DDS.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width:250px;
    height:250px;
}

.btn8:hover {
    background:black;
    opacity: 0.6;
}
#para {
    display: none;
    font-size: 10px;
    color: aliceblue;
}

.btn8:hover #para{
    display: block;
    font-size: 10px;
}
</style>

