<template>
    <div class="bg2">
      <video class="video-background" preload="auto" loop playsinline autoplay src="../assets/page2/page2vedio.mp4" tabindex="-1" muted="false"></video>
      <div class="animate__animated frame2"></div>
      <div class="animate__animated textframe"></div>
      <div class="text-container" @click="pagetoMenu">
        <div class="typed-out">
          <div>欢迎来到互联网语言考古计划2050!</div>
          <div>二十年前的互联网语言是什么样的？生活中受到挫败的底层人群在特殊的话语世界（特别是网络空间）里却</div>
          <div>现得异常活跃，其现实生存空间受到挤压转而以流行语言为宣泄出口,借此表达维权意图和对于优势阶层的愤懑不满,</div>
          <div>虽偏于情绪化却折射出底层参与范式的新取向,即底层话语权受到了一定的限制,为了突破这个壁垒，底层人群通过一</div>
          <div>套“在野的话语体系”来宣示自己的诉求。</div>
          <div> </div>
          <div>互联网语言不同于严谨宏大的官方语篇,不具备开端、高潮、结局的完整情节,常常以一句话的简单描述,将“人</div>
          <div>物、场景、行为”等要素融入日常生活的微型叙事中。 微型叙事使流行体话语的意义指向实用而直观,“反强权、讽社</div>
          <div>会、哀民生” 等价值取向十分清晰。</div>
          <div> </div>
          <div>一方面是对主流意识形态宏大叙事的消解,另一方面,又彰显了民间意识形态在语言和记忆层面上的推进,正如利奥</div>
          <div>塔所言,小叙事将可能被遮蔽的社会事实点亮,从而引入社会大众的历史叙事,并获得被讨论的资格,它的流行与传播,最</div>
          <div>大化了群体认知,从而锚定了社会记忆。</div>

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
  --animation-duration:2000ms;
  --animation-iteration:1;
  --start: 282px;
  --line-space:30px
}
.typed-out div{
  position: absolute;
  z-index: 17;
  overflow: hidden;
  /* border-right: .15em solid gray; */
  font-size: 1rem;
  color: aliceblue;
  width: 0px;
  height: 20px;
  animation: typing var(--animation-duration) linear var(--animation-iteration);
  animation-fill-mode: forwards;
  text-align: start;
}
.typed-out div:nth-child(1){
  left: 417px;
  top: var(--start);
  height: 20px;
  animation-delay: 1500ms;
}
.typed-out div:nth-child(2){
  left: 417px;
  top: calc(1*var(--line-space) + var(--start));
  animation-delay: calc(var(--animation-duration) + 1500ms);
}
.typed-out div:nth-child(3){
  left: 377px;
  top: calc(2*var(--line-space) + var(--start));
  animation-delay: calc(2*var(--animation-duration) + 1500ms);
}
.typed-out div:nth-child(4){
  left: 377px;
  top: calc(3*var(--line-space) + var(--start));
  animation-delay: calc(3*var(--animation-duration) + 1500ms);
}
.typed-out div:nth-child(5){
  left: 377px;
  top: calc(4*var(--line-space) + var(--start));
  animation-delay: calc(4*var(--animation-duration) + 1500ms);
}
.typed-out div:nth-child(6){
  left: 417px;
  top: calc(4*var(--line-space) + var(--start));
  animation-duration: 0.5s;
  animation-delay: calc(5*var(--animation-duration) + 1500ms);
}
.typed-out div:nth-child(7){
  left: 417px;
  top: calc(5*var(--line-space) + var(--start));
  animation-delay: calc(5*var(--animation-duration) + 2000ms);
}
.typed-out div:nth-child(8){
  left: 377px;
  top: calc(6*var(--line-space) + var(--start));
  animation-delay: calc(6*var(--animation-duration) + 0.5s + 1500ms);
}
.typed-out div:nth-child(9){
  left: 377px;
  top: calc(7*var(--line-space) + var(--start));
  animation-delay: calc(7*var(--animation-duration) + 0.5s + 1500ms);
}
.typed-out div:nth-child(10){
  left: 417px;
  top: calc(8*var(--line-space) + var(--start));
  animation-duration: 0.5s;
  animation-delay: calc(8*var(--animation-duration) + 2000ms);
}
.typed-out div:nth-child(11){
  left: 417px;
  top: calc(8*var(--line-space) + var(--start));
  animation-delay: calc(8*var(--animation-duration) + 2500ms);
}
.typed-out div:nth-child(12){
  left: 377px;
  top: calc(9*var(--line-space) + var(--start));
  animation-delay: calc(9*var(--animation-duration) + 2500ms);
}
.typed-out div:nth-child(13){
  left: 377px;
  top: calc(10*var(--line-space) + var(--start));
  animation-delay: calc(10*var(--animation-duration) + 2500ms);
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
  animation-name: rolling1_2;
}
@keyframes rolling1_2 {
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
  animation-name: rolling2_2;
}
@keyframes rolling2_2 {
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