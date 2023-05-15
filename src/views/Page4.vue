<template>
    <div class="bg_4">
        <Menu></Menu>
        <div class="animate__animated text_4"></div>
        <div class="animate__animated text1_4"></div>
        <div class="animate__animated text2_4"></div>
        <div class="animate__animated text3_4"></div>
        <div class="animate__animated text4_4"></div>
        <div class="animate__animated text5_4"></div>
        <div class="animate__animated text6_4"></div>
        <div class="animate__animated dabian1"></div>
        <div class="animate__animated dabian2"></div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
    export default {
        name: 'Page4',
        components: {
            Menu,
        },
    }
</script>

<style>
.bg_4 {
    background-image: url("../assets/page5/背景.png");
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1536px;
    height: 1728px;
    z-index: 2;
    overflow: hidden;
}

.text_4 {
  background-image: url("../assets/page5/text.png");
  position: absolute;
  /* 948->1536+948px */
  right: calc(-289px - 948px);
  top: 1029px;
  width: 289px;
  height: 118px;
  z-index: 41;
  --box_w: 289;
  --box_left: 948;
  --s: calc(1536 + var(--box_w) + var(--box_left));
  --t: calc(var(--s)/var(--v)*1s);
  --shadow_color: white;
  --shadow_color_middle: blueviolet;
  animation: danmu var(--t) linear 3.2s infinite, shining 1s linear 3.2s infinite;
}

.text1_4 {
  background-image: url("../assets/page5/text1.png");
  position: absolute;
  /* left: 858px; */
  right: calc(-468px - 858px);
  top: 1455px;
  width: 468px;
  height: 141px;
  z-index: 40;
  --shadow_color: white;
  --shadow_color_middle: blueviolet;
  --box_w: 468;
  --box_left: 858;
  --s: calc(1536 + var(--box_w) + var(--box_left));
  --t: calc(var(--s)/var(--v)*1s);
  animation: danmu var(--t) linear 3.2s infinite, shining 1s linear 3.2s infinite;
}

.text2_4 {
  background-image: url("../assets/page5/text2.png");
  position: absolute;
  /* left: 257px; */
  right: calc(-471px - 257px);
  top: 1302px;
  width: 471px;
  height: 139px;
  z-index: 39;
  /* 移动速度为283px/s */
  --shadow_color: green;
  --shadow_color_middle: yellow;
  --box_w: 471;
  --box_left: 257;
  --s: calc(1536 + var(--box_w) + var(--box_left));
  --t: calc(var(--s)/var(--v)*1s);
  animation: danmu var(--t) linear 3.2s infinite, shining 1s linear 3.2s infinite;
}

.text3_4 {
  background-image: url("../assets/page5/text3.png");
  position: absolute;
  /* left: 760px; */
  right: calc(-640px - 760px);
  top: 1197px;
  width: 640px;
  height: 141px;
  z-index: 38;
  --shadow_color: green;
  --shadow_color_middle: yellow;
  --box_w: 640;
  --box_left: 760;
  --s: calc(1536 + var(--box_w) + var(--box_left));
  --t: calc(var(--s)/var(--v)*1s);
  animation: danmu var(--t) linear 3.2s infinite, shining 1s linear 3.2s infinite;
}

.text4_4 {
  background-image: url("../assets/page5/text4.png");
  background-repeat: no-repeat;
  position: absolute;
  /* left: 189px; */
  right: calc(-632px - 189px);
  top: 240px;
  width: 632px;
  height: 112px;
  z-index: 35;
  --scale_num: 1.2;
  --box_w: 632;
  --box_left: 189;
  --s: calc(1536 + var(--box_w) + var(--box_left));
  --t: calc(var(--s)/var(--v)*1s);
  animation: danmu var(--t) linear 3.2s infinite, zooming 1.2s linear 3.2s infinite;
}

.text5_4 {
  background-image: url("../assets/page5/text5.png");
  position: absolute;
  /* left: 287px; */
  right: calc(-357px - 287px);
  top: 970px;
  width: 357px;
  height: 151px;
  z-index: 34;
  --scale_num: 1.2;
  --box_w: 357;
  --box_left: 287;
  --s: calc(1536 + var(--box_w) + var(--box_left));
  --t: calc(var(--s)/var(--v)*1s);
  animation: danmu_4 var(--t) linear 3.2s infinite, zooming 1.2s linear 5.2s infinite;
}

.text6_4 {
  background-image: url("../assets/page5/text6.png");
  position: absolute;
  /* left: 182px; */
  right: calc(-567px - 182px);
  top: 436px;
  width: 567px;
  height: 247px;
  z-index: 33;
  --scale_num: 1.2;
  --box_w: 567;
  --box_left: 182;
  --s: calc(1536 + var(--box_w) + var(--box_left));
  --t: calc(var(--s)/var(--v)*1s);
  animation: danmu var(--t) linear 3.2s infinite, zooming 1.2s linear 4.2s infinite;
}

.dabian1 {
    background-image: url("../assets/page5/答辩1.png");
    position: absolute;
    left: 830px;
    top: 225px;
    width: 570px;
    height: 570px;
    z-index: 38;
    /* animation-duration: 8s;
    animation-iteration-count: infinite;
    transform-origin: 285px 285px;
    animation-name: rolling;
    animation-timing-function: linear; */
    --scale_num: 1.1;
    animation: fadeInDown 3.2s, rolling 8s linear 3.2s infinite, zooming 1.2s linear 3.2s infinite;
}
@keyframes rolling {
  0% {
      transform: rotate(360deg);
  }
  100% {
      transform: rotate(0deg);
  }
}
.dabian2 {
    background-image: url("../assets/page5/答辩2.png");
    position: absolute;
    left: 786px;
    top: 181px;
    width: 650px;
    height: 650px;
    z-index: 37;
    /* animation-duration: 8s;
    animation-iteration-count: infinite;
    transform-origin: 325px 325px;
    animation-name: rolling1;
    animation-timing-function: linear; */
    animation: fadeInDown 2s, rolling1_4 8s linear 3.2s infinite;
}
@keyframes rolling1_4 {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}
</style>