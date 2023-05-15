<template>
    <div class="sidebar">
        <div class="button1" @mouseover="show1"></div>
        <div class="button2"></div>
        <div class="button3" @click="pagetoExihibition"></div>
        <div class="button4"></div>
        <div class="button5"></div>
    </div>
    <div class="button1_bottom"></div>
</template>

<script>
    export default {
        name: 'Menu',
        components: {
        
        },
    }
</script>

<script setup>
import router from '@/router';

    const show1 = ()=>{

    }
    const pagetoExihibition = () => {
        router.push('/exhibitionhall')
    }
</script>

<style>
    .sidebar {
        position: fixed;
        top: 0px;
        left:0px;
        width: 134px;
        height: 864px;
        background: url(../assets/menu/menu-bg.png);
        background-repeat: no-repeat;
        z-index: 990;
    }
    .button1 {
        background-image: url("../assets/menu/AboutUs.png");
        position: absolute;
        left: 25px;
        top: 704px;
        width: 79px;
        height: 66px;
        z-index: 991;
    }
    /* .button1_bottom {
        background-color: aquamarine;
        position: relative;
        left: -79px;
        top: 704px;
        width: 79px;
        height: 66px;
        z-index: 143;
    }
    .button1_bottom:hover {
        background-color: aquamarine;
        position: relative;
        left: 25px;
        top: 704px;
        width: 79px;
        height: 66px;
        z-index: 143;

    }  */
    .button2 {
        background-image: url("../assets/menu/drawingBoard.png");
        position: absolute;
        left: 14px;
        top: 367px;
        width: 99px;
        height: 65px;
        z-index: 991;
    }
    /* ex */
    .button3 {
        background-image: url("../assets/menu/exhibitionHall.png");
        position: absolute;
        left: 6px;
        top: 200px;
        width: 122px;
        height: 97px;
        z-index: 991;
    }
    .button4 {
        background-image: url("../assets/menu/home.png");
        position: absolute;
        left: 17px;
        top: 53px;
        width: 109px;
        height: 44px;
        z-index: 991;
    }
    .button5 {
        background-image: url("../assets/menu/messageBoard.png");
        position: absolute;
        left: 14px;
        top: 525px;
        width: 104px;
        height: 71px;
        z-index: 991;
    }
</style>