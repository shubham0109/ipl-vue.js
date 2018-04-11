<template>
  <div>
    <a href="https://www.royalchallengers.com/" target="_blank">
        <button class="btn3">
            <p id="para">They have the best team. 
            Led by Kohli. Hasn't won till now. But this could be their season<br>
            Click to know more
            </p>
        </button>
    </a>
  </div>
</template>

<style>
.btn3 {
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    background-image: url('../../image/RCBS.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width:250px;
    height:250px;
}

.btn3:hover {
    background:black;
    opacity: 0.6;
}
#para {
    display: none;
    font-size: 10px;
    color: aliceblue;
}

.btn3:hover #para{
    display: block;
}
</style>

