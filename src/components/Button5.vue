<template>
  <div>
    <a href="https://www.kxip.in/" target="_blank">
        <Button  class="btn5">
            <p id="para">Have a good balanced team. 
            Yet to win the championship. Led by R.Ashwin<br>
            Click to know more
            </p>
        </Button>
    </a>
  </div>
</template>

<style>
.btn5 {
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    background-image: url('../../image/KEPS.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width:250px;
    height:250px;
}

.btn5:hover {
    background:black;
    opacity: 0.6;
}
#para {
    display: none;
    font-size: 10px;
    color: aliceblue;
}

.btn5:hover #para{
    display: block;
}
</style>

