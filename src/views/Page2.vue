<template>
    <div class="bg2">
      <video class="video-background" preload="auto" loop playsinline autoplay src="../assets/page2/page2vedio.mp4" tabindex="-1" muted="false"></video>
      <div class="animate__animated frame2"></div>
      <div class="animate__animated textframe"></div>
      <div class="text-container" @click="pagetoMenu">
        <div class="typed-out">
          <div>hahahhahhhhhhhhhhhhhhrrrrrrrrrr</div>
          <div>hahahhahhhhhhhhhhhhhhwwwwwwhhhh</div>
          <div>hahahhahhhhhhhhhhhh1111111111hh</div>
          <div>yyyyyyyy</div>
        </div>
      </div>
      <div class="topic2" v-if="showTopic"></div>
      <div class="roll1"></div>
      <div class="roll2"></div>
      <div class="roll3"></div>
      <div class="roll4"></div>
      <div class="roll5"></div>
      <div class="roll6"></div>
    </div>
</template>
<script setup>
import router from '@/router';
import { onMounted, ref } from 'vue';

const showTopic = ref(false)
const pagetoMenu = ()=>{
  router.push('/')
}
onMounted(()=>{
  setTimeout(()=>{
    showTopic.value = true
  },1400)
})
</script>
<style>
.bg2{
  object-fit: cover;
  position: relative;
  left: -4px;
  top: -4px;
  width: 1544px;
  height: 868px;
  z-index: 8;
}
.video-background{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.frame2 {
  background-image: url("../assets/frame2.png");
  position: absolute;
  left: 297px;
  top: 71px;
  width: 953px;
  height: 631px;
  z-index: 6;
  animation: zoomIn;
  animation-duration: 1500ms;
}
.textframe {
  background-image: url("../assets/vedioframe.png");
  position: absolute;
  left: 305px;
  top: 158px;
  width: 937px;
  height: 536px;
  z-index: 1;
  opacity: 0.5;
  animation: zoomIn;
  animation-duration: 1500ms;
}
.topic2 {
  background-image: url("../assets/page2/topic2.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 377px;
  top: 182px;
  width: 794px;
  height: 46px;
  z-index: 17;
}

.text-container {
  display: inline-block;
}
.typed-out {
  --animation-duration:5000ms;
  --animation-iteration:1;
}
.typed-out div{
  position: absolute;
  z-index: 17;
  overflow: hidden;
  /* border-right: .15em solid gray; */
  font-size: 3rem;
  color: aliceblue;
  width: 0px;
  animation: typing var(--animation-duration) linear var(--animation-iteration);
  animation-fill-mode: forwards;
}
.typed-out div:nth-child(1){
  left: 377px;
  top: 282px;
  height: 46px;
  animation-delay: 1500ms;
}
.typed-out div:nth-child(2){
  left: 377px;
  top: 382px;
  animation-delay: calc(var(--animation-duration) + 1500ms);
}
.typed-out div:nth-child(3){
  left: 377px;
  top: 482px;
  animation-delay: calc(2*var(--animation-duration) + 1500ms);
}
.typed-out div:nth-child(4){
  left: 377px;
  top: 582px;
  animation-delay: calc(3*var(--animation-duration) + 1500ms);
}
@keyframes typing {
  from { width: 0px }
  to { width: 794px; }
}
.roll1, .roll2, .roll3, .roll4, .roll5, .roll6 {
  background-image: url("../assets/page2/image_roll.png");
  position: absolute;
  z-index: 10;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  transform-origin: 91px 95px
}
.roll1 {
  left: 53px;
  top: 41px;
  width: 183px;
  height: 189px;
  animation-name: rolling1;
}
@keyframes rolling1 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
  100% {
    transform: rotate(360deg);
    animation-timing-function: linear;
  }
}
.roll2 {
  left: 51px;
  top: 323px;
  width: 188px;
  height: 183px;
  animation-name: rolling2;
}
@keyframes rolling2 {
  0% {
    transform: rotate(50deg);
    animation-timing-function: linear;
  }
  100% {
    transform: rotate(410deg);
    animation-timing-function: linear;
  }
}
.roll3 {
  left: 52px;
  top: 596px;
  width: 183px;
  height: 189px;
  animation-name: rolling3;
}
@keyframes rolling3 {
  0% {
    transform: rotate(80deg);
    animation-timing-function: linear;
  }
  100% {
    transform: rotate(440deg);
    animation-timing-function: linear;
  }
}
.roll4 {
  left: 1311px;
  top: 596px;
  width: 183px;
  height: 188px;
  animation-name: rolling4;
}
@keyframes rolling4 {
  0% {
    transform: rotate(100deg);
    animation-timing-function: linear;
  }
  100% {
    transform: rotate(460deg);
    animation-timing-function: linear;
  }
}
.roll5 {
  left: 1308px;
  top: 320px;
  width: 187px;
  height: 189px;
  animation-name: rolling5;
}
@keyframes rolling5 {
  0% {
    transform: rotate(130deg);
    animation-timing-function: linear;
  }
  100% {
    transform: rotate(490deg);
    animation-timing-function: linear;
  }
}
.roll6 {
  left: 1310px;
  top: 41px;
  width: 186px;
  height: 189px;
  animation-name: rolling6;
}
@keyframes rolling6 {
  0% {
    transform: rotate(170deg);
    animation-timing-function: linear;
  }
  100% {
    transform: rotate(530deg);
    animation-timing-function: linear;
  }
}

</style>