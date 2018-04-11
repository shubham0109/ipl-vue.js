<template>
  <div>
    <a href="http://www.mumbaiindians.com/" target="_blank">
        <Button  class="btn4">
            <p id="para">The most successful team of IPL. 
            Won it three times.<br>
            Click to know more
            </p>
        </Button>
    </a>
  </div>
</template>

<style>
.btn4 {
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    background-image: url('../../image/MIS.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width:250px;
    height:250px;
}
.btn4:hover {
    background:black;
    opacity: 0.6;
}
#para {
    display: none;
    font-size: 10px;
    color: aliceblue;
}

.btn4:hover #para{
    display: block;
}
</style>

