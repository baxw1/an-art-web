<template>
    <canvas id="myCanvas" ref='canvas'
            width="920" height="497" @mousedown="mousedown" @mouseup="mouseup" @mousemove="mousemove" @mouseout="mouseup">
    </canvas>
</template>

<script setup>
import { onMounted, ref, toRefs, defineProps, defineEmits, watch } from 'vue';

    const emit = defineEmits(['saveok'])
    const props = defineProps({
        paincolor:String,
        save:Boolean,
    })
    const {paincolor, save} = toRefs(props)
    const new_imageurl = ref('')

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
    watch(
        ()=>save.value,
        (val, oldval)=>{
            if(val){
                // new_imageurl.value = canvas.value.toDataURL()
                // console.log(new_imageurl.value)
                // emit('saveok', new_imageurl.value);
                ctx.clearRect(0,0,920,497); //清除画板
            }
        }
    )
    const mousedown = (e)=>{
        isDown.value = true;
        beginPoint = getPos(e);
    }
    const mouseup = (e)=>{
        if (!isDown.value) return;
        const endPoint = getPos(e);
        drawLine(beginPoint, endPoint);
        beginPoint = null;
        isDown.value = false;
    }
    const mousemove = (e)=>{
        if (!isDown.value) return;
        const endPoint = getPos(e);
        drawLine(beginPoint, endPoint);
        beginPoint = endPoint;
    }
    const getPos = (e)=>{
        return {
            x: e.clientX-118,
            y: e.clientY-101
        }
    }
    const drawLine = (beginPoint, endPoint)=>{
        ctx.beginPath();
        // ctx.lineWidth = 20;
        ctx.strokeStyle = paincolor.value;
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
    left: 119px;
    top: 102px;
}
</style>
