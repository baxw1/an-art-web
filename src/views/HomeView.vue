<template>
  <div class="bg">
    <div class="mainBackground">
      <div class="bgText">
          <div class="animate__animated menucard1" @click="gotopage1">
          </div>
          <div :class="animationclass1" class="zhuzi1">
          </div>
          <div class="animate__animated menucard2" @click="gotopage2">
          </div>
          <div :class="animationclass2" class="zhuzi2">
          </div>
          <div class="animate__animated menucard3" @click="gotopage3">
          </div>
          <div :class="animationclass3" class="zhuzi3">
          </div>
          <div class="animate__animated menucard4" @click="gotopage4">
          </div>
          <div :class="animationclass4" class="zhuzi4">
          </div>
          <div class="vedio"  @click="vedioShow">
            <video style="width: 100%; height:100%; object-fit: fill" controls @ended="vedioEnded" v-if="showvedio">
              <source src="../assets/page1/vedio.mp4" type="video/mp4" style="width: 100%; height:100%; object-fit: fill">
            </video>
          </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
const showvedio = ref(false)
const animationclass1 = ref('animate__animated')
const animationclass2 = ref('animate__animated')
const animationclass3 = ref('animate__animated')
const animationclass4 = ref('animate__animated')
const vedioShow = ()=>{
  showvedio.value = true
}
const vedioEnded = ()=>{
  showvedio.value = false
}
const gotopage1 = ()=>{
  animationclass1.value = 'shake'
}
const gotopage2 = ()=>{
  animationclass2.value = 'shake'
  setTimeout(()=>{
    router.push('/exhibitionhall')
  },1500)
}
//下面两个图片放反了，无所谓，反着用吧
const gotopage3 = ()=>{
  animationclass4.value = 'shake'
  setTimeout(()=>{
    router.push('/aboutus')
  },1500)
}
const gotopage4 = ()=>{
  animationclass3.value = 'shake'
}
</script>

<style>
.bg{
  background-image: url(../assets/page1/bg.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: relative;
  left: 0px;
  top: 0px;
  width: 1536px;
  height: 864px;
  z-index: 8;
  cursor: url(../assets/page1/cursor1.cur),pointer
}
.mainBackground{
  width: 1536px;
  height: 864px;
  background-image: url(../assets/page1/mainbg.png);
  background-repeat:no-repeat;
  background-size: cover;
}
.bgText{
  width: 1536px;
  height: 864px;
  background-image: url(../assets/page1/bgText.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: relative;
}
.zhuzi1{
  height: 425px;
  width: 80px;
  background-image: url(../assets/page1/zhuzi.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: absolute;
  left: 34px;
  top: 378px;
  width: 73px;
  height: 486px;
  z-index: 65;
}
.zhuzi2{
  background-image: url(../assets/page1/zhuzi.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: absolute;
  left: 175px;
  top: 204px;
  width: 74px;
  height: 486px;
  z-index: 44;
}
.zhuzi3{
  background-image: url(../assets/page1/zhuzi.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: absolute;
  left: 1293px;
  top: 204px;
  width: 73px;
  height: 486px;
  z-index: 54;
}
.zhuzi4{
  background-image: url(../assets/page1/zhuzi.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: absolute;
  left: 1420px;
  top: 378px;
  width: 74px;
  height: 486px;
  z-index: 64;
}
.menucard1{
  background-image: url(../assets/page1/menucard1.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: absolute;
  left: 5px;
  top: 315px;
  width: 130px;
  height: 53px;
  z-index: 92;
}
.menucard2{
  background-image: url(../assets/page1/menucard2.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: absolute;
  left: 147px;
  top: 123px;
  width: 131px;
  height: 53px;
  z-index: 100;
}
.menucard3{
  background-image: url(../assets/page1/menucard4.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: absolute;
  left: 1398px;
  top: 306px;
  width: 131px;
  height: 53px;
  z-index: 104;
}
.menucard4{
  background-image: url(../assets/page1/menucard3.png);
  background-repeat:no-repeat;
  background-size: cover;
  position: absolute;
  left: 1268px;
  top: 122px;
  width: 130px;
  height: 53px;
  z-index: 102;
}
.vedio{
  /* background-image: url(../assets/vedioframe.png);
  background-repeat:no-repeat;
  background-size: cover; */
  position: absolute;
  left: 307.2px;
  top: 149.6px;
  width: 932.8px;
  height: 533.6px;
  z-index: 600;
}
.zhuzi1,.zhuzi2,.zhuzi3,.zhuzi4{
  animation: fadeInDown;
  animation-duration: 1200ms;
}
.menucard1,.menucard2,.menucard3,.menucard4{
  animation: fadeInDown;
  animation-delay: 1200ms;
}
.shake{
  animation-name: shaketwice;
  animation-duration: 1.5s;
  transform-origin: 37px 486px
  /* animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-delay: .5s; */
}
@keyframes shaketwice{
  0% {
    transform: rotate(0deg);
    transition-timing-function: cubic-bezier(0.215,.61,.355,1);
  }
  25% {
    transform: rotate(-12deg);
    transition-timing-function: cubic-bezier(0.215,.61,.355,1);
  }
  /* 50% {
    transform: rotate(0deg);
    transition-timing-function: cubic-bezier(0.215,.61,.355,1);
  } */
  75% {
    transform: rotate(12deg);
    transition-timing-function: cubic-bezier(0.215,.61,.355,1);
  }
  100% {
    transform: rotate(0deg);
    transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
  }
}
</style>