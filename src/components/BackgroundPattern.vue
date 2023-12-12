<template>
  <div class="dynamic-background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BackgroundPattern',
})
</script>

<style lang="scss">
.body--light {
  .dynamic-background {
    background-image: radial-gradient(circle, #59eae1, #3ceece, #3bf1b3, #55f190, #77f067, #7ae958, #7de249, #80db39, #63ce49, #48c155, #2cb35d, #06a563);
    //background-image: radial-gradient(circle, #59eae1, #3eebcc, #3deaaf, #54e88c, #72e463, #74dd55, #77d646, #79cf36, #5fc546, #46bb52, #2cb05c, #06a563);
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .dynamic-background span {
    list-style: none;
    display: block;
    width: 80px;
    height: 80px;
    background-color: hsla(0, 0%, 100%, .1);
    bottom: -320px;
    -webkit-animation: light_move 50s infinite;
    animation: light_move 50s infinite;
    transition-timing-function: linear;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    position: absolute;
  }

  @keyframes light_move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1500px) rotate(600deg);
    }
  }

  .dynamic-background span:first-child {
    left: 10%;
  }

  .dynamic-background span:nth-child(2) {
    left: 20%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 34s;
    animation-duration: 34s;
  }

  .dynamic-background span:nth-child(3) {
    left: 25%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }

  .dynamic-background span:nth-child(4) {
    left: 40%;
    width: 120px;
    height: 120px;
    -webkit-animation-duration: 44s;
    animation-duration: 44s;
  }

  .dynamic-background span:nth-child(5) {
    left: 70%;
  }

  .dynamic-background span:nth-child(6) {
    left: 80%;
    width: 240px;
    height: 240px;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
  }

  .dynamic-background span:nth-child(7) {
    left: 32%;
    width: 320px;
    height: 320px;
    -webkit-animation-delay: 7s;
    animation-delay: 7s;
  }

  .dynamic-background span:nth-child(8) {
    left: 55%;
    width: 40px;
    height: 40px;
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
    -webkit-animation-duration: 80s;
    animation-duration: 80s;
  }

  .dynamic-background span:nth-child(9) {
    left: 25%;
    width: 20px;
    height: 20px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 80s;
    animation-duration: 80s;
  }

  .dynamic-background span:nth-child(10) {
    left: 90%;
    width: 320px;
    height: 320px;
    -webkit-animation-delay: 22s;
    animation-delay: 22s;
  }

  .dynamic-background span:nth-child(12),
  .dynamic-background span:nth-child(13),
  .dynamic-background span:nth-child(14),
  .dynamic-background span:nth-child(15),
  .dynamic-background span:nth-child(16),
  .dynamic-background span:nth-child(17),
  .dynamic-background span:nth-child(18),
  .dynamic-background span:nth-child(19),
  .dynamic-background span:nth-child(20) {
    display: none;
  }
}

.body--dark {
  .dynamic-background {
    background: var(--q-color-page-in-dark);
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  .dynamic-background span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation-name: blured_move;
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes blured_move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .dynamic-background span:nth-child(1), .dynamic-background span:nth-child(3), .dynamic-background span:nth-child(5), .dynamic-background span:nth-child(8), .dynamic-background span:nth-child(11), .dynamic-background span:nth-child(12), .dynamic-background span:nth-child(15), .dynamic-background span:nth-child(20) {
    color: var(--q-color-lemon-green);
  }

  .dynamic-background span:nth-child(2), .dynamic-background span:nth-child(6), .dynamic-background span:nth-child(7), .dynamic-background span:nth-child(9), .dynamic-background span:nth-child(10), .dynamic-background span:nth-child(13), .dynamic-background span:nth-child(16), .dynamic-background span:nth-child(17), .dynamic-background span:nth-child(19) {
    color: #282828;
  }

  .dynamic-background span:nth-child(4), .dynamic-background span:nth-child(14), .dynamic-background span:nth-child(18) {
    color: var(--q-color-lemon-yellow);
  }

  .dynamic-background span:nth-child(1) {
    top: 56%;
    left: 9%;
    animation-duration: 11s;
    animation-delay: -8.1s;
    transform-origin: 6vw -10vh;
    box-shadow: 40vmin 0 13.0166555866vmin currentColor;
  }

  .dynamic-background span:nth-child(2) {
    top: 72%;
    left: 75%;
    animation-duration: 11.1s;
    animation-delay: -3.8s;
    transform-origin: -12vw 9vh;
    box-shadow: 40vmin 0 6.1961466709vmin currentColor;
  }

  .dynamic-background span:nth-child(3) {
    top: 9%;
    left: 81%;
    animation-duration: 11.9s;
    animation-delay: -7.1s;
    transform-origin: 23vw 2vh;
    box-shadow: -40vmin 0 7.4502495452vmin currentColor;
  }

  .dynamic-background span:nth-child(4) {
    top: 2%;
    left: 17%;
    animation-duration: 12s;
    animation-delay: -2.8s;
    transform-origin: -16vw 8vh;
    box-shadow: -40vmin 0 12.533787847vmin currentColor;
  }

  .dynamic-background span:nth-child(5) {
    top: 25%;
    left: 4%;
    animation-duration: 15.6s;
    animation-delay: -8s;
    transform-origin: -20vw -22vh;
    box-shadow: -40vmin 0 5.4723418582vmin currentColor;
  }

  .dynamic-background span:nth-child(6) {
    top: 25%;
    left: 11%;
    animation-duration: 12.4s;
    animation-delay: -7.2s;
    transform-origin: 6vw -17vh;
    box-shadow: 40vmin 0 10.0276258235vmin currentColor;
  }

  .dynamic-background span:nth-child(7) {
    top: 5%;
    left: 29%;
    animation-duration: 10.4s;
    animation-delay: -8.4s;
    transform-origin: 20vw 5vh;
    box-shadow: -40vmin 0 6.0912947411vmin currentColor;
  }

  .dynamic-background span:nth-child(8) {
    top: 38%;
    left: 18%;
    animation-duration: 14s;
    animation-delay: -13.9s;
    transform-origin: 5vw -1vh;
    box-shadow: -40vmin 0 7.4727724313vmin currentColor;
  }

  .dynamic-background span:nth-child(9) {
    top: 63%;
    left: 83%;
    animation-duration: 11.6s;
    animation-delay: -10.9s;
    transform-origin: -2vw -11vh;
    box-shadow: -40vmin 0 7.1376872218vmin currentColor;
  }

  .dynamic-background span:nth-child(10) {
    top: 44%;
    left: 64%;
    animation-duration: 12s;
    animation-delay: -4.7s;
    transform-origin: -24vw 17vh;
    box-shadow: 40vmin 0 7.4094127515vmin currentColor;
  }

  .dynamic-background span:nth-child(11) {
    top: 73%;
    left: 76%;
    animation-duration: 15.8s;
    animation-delay: -6.2s;
    transform-origin: -9vw -24vh;
    box-shadow: 40vmin 0 14.0899880498vmin currentColor;
  }

  .dynamic-background span:nth-child(12) {
    top: 4%;
    left: 96%;
    animation-duration: 12.1s;
    animation-delay: -7.9s;
    transform-origin: -7vw 11vh;
    box-shadow: 40vmin 0 12.0679060615vmin currentColor;
  }

  .dynamic-background span:nth-child(13) {
    top: 80%;
    left: 89%;
    animation-duration: 10.7s;
    animation-delay: -9.6s;
    transform-origin: -23vw 8vh;
    box-shadow: -40vmin 0 13.4227817909vmin currentColor;
  }

  .dynamic-background span:nth-child(14) {
    top: 10%;
    left: 84%;
    animation-duration: 11.7s;
    animation-delay: -13.7s;
    transform-origin: 23vw -9vh;
    box-shadow: 40vmin 0 13.0652683419vmin currentColor;
  }

  .dynamic-background span:nth-child(15) {
    top: 31%;
    left: 52%;
    animation-duration: 12s;
    animation-delay: -4.5s;
    transform-origin: 1vw -5vh;
    box-shadow: 40vmin 0 14.569884619vmin currentColor;
  }

  .dynamic-background span:nth-child(16) {
    top: 6%;
    left: 98%;
    animation-duration: 12.7s;
    animation-delay: -7.5s;
    transform-origin: 15vw -9vh;
    box-shadow: -40vmin 0 7.281992007vmin currentColor;
  }

  .dynamic-background span:nth-child(17) {
    top: 18%;
    left: 96%;
    animation-duration: 12.7s;
    animation-delay: -7.6s;
    transform-origin: -11vw 23vh;
    box-shadow: 40vmin 0 11.8428291366vmin currentColor;
  }

  .dynamic-background span:nth-child(18) {
    top: 47%;
    left: 65%;
    animation-duration: 13.3s;
    animation-delay: -12.4s;
    transform-origin: 14vw -13vh;
    box-shadow: -40vmin 0 5.1686799201vmin currentColor;
  }

  .dynamic-background span:nth-child(19) {
    top: 51%;
    left: 61%;
    animation-duration: 13.5s;
    animation-delay: -15.1s;
    transform-origin: -11vw 16vh;
    box-shadow: -40vmin 0 9.0171705711vmin currentColor;
  }

  .dynamic-background span:nth-child(20) {
    top: 64%;
    left: 96%;
    animation-duration: 14.9s;
    animation-delay: -4.7s;
    transform-origin: 8vw 7vh;
    box-shadow: 40vmin 0 5.1015424987vmin currentColor;
  }
}
</style>
