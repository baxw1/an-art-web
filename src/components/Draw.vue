<template>
    <canvas id="myCanvas" ref='canvas'
            width="1536" height="868" @mousedown="mousedown" @mouseup="mouseup" @mousemove="mousemove" @mouseout="mouseup">
    </canvas>
  </template>
   
<script setup>
import { onMounted, ref } from 'vue';

    const isDown = ref(false)
    let beginPoint = null;
    const x = ref(0)
    const y = ref(0)
    const canvas = ref();
    // const ctx = canvas.value.getContext('2d');
    let x0 = 0
    let y0 = 0
    let ctx = null
    onMounted(() => {
        ctx = canvas.value.getContext('2d'); 
    })
    const mousedown = (e)=>{
        console.log("鼠标落下");
        isDown.value = true;
        beginPoint = getPos(e);
    }
    const mouseup = (e)=>{
        console.log("鼠标抬起");
        if (!isDown.value) return;
        const endPoint = getPos(e);
        drawLine(beginPoint, endPoint);
        beginPoint = null;
        isDown.value = false;
    }
    const mousemove = (e)=>{
        console.log("鼠标移动");
        if (!isDown.value) return;
        const endPoint = getPos(e);
        drawLine(beginPoint, endPoint);
        beginPoint = endPoint;
    }
    const getPos = (e)=>{
        return {
            x: e.clientX,
            y: e.clientY
        }
    }
    const drawLine = (beginPoint, endPoint)=>{
        ctx.beginPath();
        // ctx.lineWidth = 20;
        console.log(beginPoint.x)
        ctx.moveTo(beginPoint.x, beginPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
        ctx.closePath();
    }
    const drawRect = (e)=>{
        if(isDown.value){
        console.log("绘制图形");
        const ctx = canvas.value.getContext('2d'); 
        x0 = x.value;
        y0 = y.value;

        ctx.clearRect(0,0,460,240);
        ctx.beginPath();

        //设置线条颜色，必须放在绘制之前
        ctx.strokeStyle = '#fffff';
        // 线宽设置，必须放在绘制之前
        ctx.lineWidth = 50;

        ctx.strokeRect(x0,y0,e.offsetX-x0,e.offsetY-y0);
        }
    }
</script>
   
<style>
#myCanvas{
    position: absolute;
    left: 0;
    top: 0;
}
</style>