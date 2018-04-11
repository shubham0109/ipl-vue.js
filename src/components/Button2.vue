<template>
  <div>
    <a href="http://www.chennaisuperkings.com/CSK_WEB/index.html" target="_blank">
        <button class="btn2">
            <p id="para">The most consistent side in IPL. Won 
            it two times. Led by MSD. Has played most no. of finals.<br>
            Click to know more
            </p>
        </button>
    </a>
  </div>
</template>

<style>
.btn2 {
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    background-image: url('../../image/CSKS.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width:250px;
    height:250px;
}

.btn2:hover {
    background:black;
    opacity: 0.6;
}
#para {
    display: none;
    font-size: 10px;
    color: aliceblue;
}

.btn2:hover #para{
    display: block;
}
</style>

