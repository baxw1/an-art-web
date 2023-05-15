<template>
    <div class="bg">
        <Menu></Menu>
        <div class="animate__animated circle"></div>
        <div class="wujiaoxing1"></div>
        <div class="wujiaoxing2"></div>
        <div class="wujiaoxing3"></div>
        <div class="text1"></div>
        <div class="text2"></div>
        <div class="text3"></div>
        <div class="text4"></div>
        <div class="text5"></div>
        <div class="text6"></div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
    export default {
        name: 'Page3',
        components: {
            Menu,
        },
    }
</script>
<script setup>
    
</script>

<style>
    .bg {
        background-image: url("../assets/page4/bg.png");
        position: relative;
        left: 80px;
        top: 0px;
        width: 1536px;
        height: 1728px;
        z-index: 54;
        overflow: hidden;
        --delay: 2.5s;
    }
    .circle {
        background-image: url("../assets/page4/圆圈.png");
        position: absolute;
        left: 250px;
        top: 311px;
        width: 339px;
        height: 280px;
        z-index: 55;
        transform-origin: 170px 140px;
        --scale_num: 1.2;
        animation: fadeInDown var(--delay),rolling1 9s linear var(--delay) infinite;
    }
    @keyframes rolling1 {
        0% {
            transform: rotate(0deg) scale(1);
        }
        25% {
            transform: rotate(90deg) scale(1.8);
        }
        50% {
            transform: rotate(180deg) scale(1);
        }
        75% {
            transform: rotate(270deg) scale(1.1);
        }
        100% {
            transform: rotate(360deg) scale(1);
        }
    }

    .text1 {
        background-image: url("../assets/page4/text1.png");
        position: absolute;
        top: 1493px;
        width: 283px;
        height: 75px;
        z-index: 70;
        --box_w: 283;
        --box_left: 1000;
        right: calc((0 - var(--box_w) - var(--box_left))*1px);
        --s: calc(1536 + var(--box_w) + var(--box_left));
        --t: calc(var(--s)/var(--v)*1s);
        --shadow_color: white;
        --shadow_color_middle: blueviolet;
        --scale_num: 1.1;
        animation: danmu var(--t) linear var(--delay) infinite, shining 0.5s linear var(--delay) infinite,  zooming 1s linear var(--delay) infinite;
    }
    .text2 {
        background-image: url("../assets/page4/text2.png");
        position: absolute;
        top: 1552px;
        width: 283px;
        height: 76px;
        z-index: 69;
        --box_w: 283;
        --box_left: 661;
        right: calc((0 - var(--box_w) - var(--box_left))*1px);
        --s: calc(1536 + var(--box_w) + var(--box_left));
        --t: calc(var(--s)/var(--v)*1s);
        --shadow_color: white;
        --shadow_color_middle: blueviolet;
        --scale_num: 1.1;
        animation: danmu var(--t) linear var(--delay) infinite, shining 0.5s linear var(--delay) infinite,  zooming 1s linear var(--delay) infinite;
    }
    .text3 {
        background-image: url("../assets/page4/text3.png");
        position: absolute;
        top: 1450px;
        width: 283px;
        height: 75px;
        z-index: 68;
        --box_w: 283;
        --box_left: 414;
        right: calc((0 - var(--box_w) - var(--box_left))*1px);
        --s: calc(1536 + var(--box_w) + var(--box_left));
        --t: calc(var(--s)/var(--v)*1s);
        --shadow_color: white;
        --shadow_color_middle: blueviolet;
        --scale_num: 1.1;
        animation: danmu var(--t) linear var(--delay) infinite, shining 0.5s linear var(--delay) infinite,  zooming 1s linear var(--delay) infinite;
    }
    .text4 {
        background-image: url("../assets/page4/text4.png");
        position: absolute;
        top: 886px;
        width: 652px;
        height: 76px;
        z-index: 61;
        --box_w: 283;
        --box_left: 494;
        right: calc((0 - var(--box_w) - var(--box_left))*1px);
        --s: calc(1536 + var(--box_w) + var(--box_left));
        --t: calc(var(--s)/var(--v)*1s);
        --shadow_color: green;
        --shadow_color_middle: yellow;
        --scale_num: 1.1;
        animation: danmu var(--t) linear var(--delay) infinite, shining 0.5s linear var(--delay) infinite,  zooming 1s linear var(--delay) infinite;
    }

    .text5 {
        background-image: url("../assets/page4/text5.png");
        position: absolute;
        top: 811px;
        width: 506px;
        height: 64px;
        z-index: 60;
        --box_w: 283;
        --box_left: 982;
        right: calc((0 - var(--box_w) - var(--box_left))*1px);
        --s: calc(1536 + var(--box_w) + var(--box_left));
        --t: calc(var(--s)/var(--v)*1s);
        --shadow_color: green;
        --shadow_color_middle: yellow;
        --scale_num: 1.1;
        animation: danmu var(--t) linear var(--delay) infinite, shining 0.5s linear var(--delay) infinite,  zooming 1s linear var(--delay) infinite;
    }

    .text6 {
        background-image: url("../assets/page4/text6.png");
        position: absolute;
        top: 1011px;
        width: 685px;
        height: 53px;
        z-index: 59;
        --box_w: 283;
        --box_left: 748;
        right: calc((0 - var(--box_w) - var(--box_left))*1px);
        --s: calc(1536 + var(--box_w) + var(--box_left));
        --t: calc(var(--s)/var(--v)*1s);
        --shadow_color: green;
        --shadow_color_middle: yellow;
        --scale_num: 1.1;
        animation: danmu var(--t) linear var(--delay) infinite, shining 0.5s linear var(--delay) infinite,  zooming 1s linear var(--delay) infinite;
    }

    .wujiaoxing1 {
        background-image: url("../assets/page4/五角星.png");
        position: absolute;
        left: 306px;
        top: 1136px;
        width: 247px;
        height: 237px;
        z-index: 64;
        transform-origin: 200px 119px;
        --scale_num: 1.2;
        animation: fadeInRight var(--delay), rolling2 2.3s linear var(--delay) infinite;
    }
    .wujiaoxing2 {
        background-image: url("../assets/page4/五角星.png");
        position: absolute;
        left: 754px;
        top: 1132px;
        width: 247px;
        height: 237px;
        z-index: 65;
        transform-origin: 120px 90px;
        --scale_num: 1.2;
        animation: fadeInRight var(--delay), rolling1 3s linear var(--delay) infinite;
    }
    .wujiaoxing3 {
        background-image: url("../assets/page4/五角星.png");
        position: absolute;
        left: 1195px;
        top: 1135px;
        width: 248px;
        height: 238px;
        z-index: 66;
        transform-origin: 80px 140px;
        --scale_num: 1.2;
        animation: fadeInRight var(--delay), rolling1 2.5s linear var(--delay) infinite;
    }
    @keyframes rolling2 {
        0% {
            transform: rotate(0deg) scale(1);
        }
        25% {
            transform: rotate(-90deg) scale(1.5);
        }
        50% {
            transform: rotate(-180deg) scale(1);
        }
        75% {
            transform: rotate(-270deg) scale(1.2);
        }
        100% {
            transform: rotate(-360deg) scale(1);
        }
    }
</style>