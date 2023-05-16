<template>
    <div class="bg_6">
        <Menu></Menu>
        <div class="top-bar"></div>
        <div class="topic_6"></div>
        <div class="red" @click="changecolor('red')"></div>
        <div class="blue" @click="changecolor('blue')"></div>
        <div class="green" @click="changecolor('green')"></div>
        <div class="black" @click="changecolor('black')"></div>
        <div class="yellow" @click="changecolor('yellow')"></div>
        <div class="white" @click="changecolor('white')"></div>
        <div class="send-and-save" @click="savecanvs">
            <div class="save"></div>
        </div>
        <Draw :paincolor="painColor" :save="save" @saveok="shownewimg"></Draw>
        <div class="history-img">
            <img v-if="newimgurl===''?false:true" :src="newimgurl" width="500" alt="aa">
        </div>
        <div class="history"></div>
         <div class="bottom-bar">
           <textarea id="input" rows="5" cols="5"></textarea>
         </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Draw from '../components/Draw.vue'
    import Menu from '../components/Menu.vue'

    const painColor = ref('black')
    const save = ref(false)
    const newimgurl = ref('')
    const changecolor = (new_color)=>{
        console.log(new_color)
        painColor.value = new_color
        console.log(painColor.value)
    }
    const savecanvs = ()=>{
        save.value = true
    }
    const shownewimg = (url)=>{
        newimgurl.value = url
        save.value = false
    }

</script>

<style>
    .bg_6{
        background-image: url('../assets/page6/bg_6.png');
        position: relative;
        width: 1536px;
        height: 869px;
        left: 0;
        top: 0;
        z-index: 1;
    }
    .top-bar{
        position: absolute;
        top: 0px;
        left:118px;
        width: 925px;
        height: 101px;
        background-color: black;
        z-index: 2;
    }
    .topic_6{
        background-image: url("../assets/page6/标题.png");
        position: absolute;
        left: 173px;
        top: 60px;
        width: 783px;
        height: 32px;
        z-index: 135;
    }
    .red{
        background-image: url("../assets/page6/红.png");
        position: absolute;
        left: 976px;
        top: 176px;
        width: 38px;
        height: 39px;
        z-index: 127;
    }
    .blue{
        background-image: url("../assets/page6/蓝.png");
        position: absolute;
        left: 976px;
        top: 214px;
        width: 38px;
        height: 39px;
        z-index: 128;
    }
    .green{
        background-image: url("../assets/page6/绿.png");
        position: absolute;
        left: 976px;
        top: 252px;
        width: 38px;
        height: 40px;
        z-index: 129;
    }
    .yellow{
        background-image: url("../assets/page6/黄.png");
        position: absolute;
        left: 976px;
        top: 329px;
        width: 38px;
        height: 39px;
        z-index: 131;
    }
    .black{
        background-image: url("../assets/page6/黑.png");
        position: absolute;
        left: 976px;
        top: 291px;
        width: 38px;
        height: 39px;
        z-index: 130;
    }
    .white{
        background-image: url("../assets/page6/白.png");
        position: absolute;
        left: 976px;
        top: 412px;
        width: 38px;
        height: 40px;
        z-index: 132;
    }
    .send-and-save{
        background-image: url("../assets/page6/send-and-save.png");
        position: absolute;
        left: 877px;
        top: 517px;
        width: 123px;
        height: 312px;
        z-index: 133;
    }
    .save {
        /*background-color: aliceblue;*/
        position: absolute;
        top: 0px;
        left: 0px;
        width: 123px;
        height: 50px;
        z-index: 134;
    }
    .history{
        background-image: url("../assets/page6/history.png");
        position: absolute;
        left: 1074px;
        top: 51px;
        width: 155px;
        height: 35px;
        z-index: 136;
    }
    .history-img{
        position: absolute;
        top: 110px;
        left: 1030px;
        width: 500px;
        height: 400px;
    }
    .bottom-bar{
        position: absolute;
        top: 598px;
        left:118px;
        width: 925px;
        height: 270px;
        /*background-color: black;*/
        z-index: 2;
    }
    #input{
      background-color: rgba(0, 0, 0, 0); /* 透明背景色 */
      border: none;
      padding: 10px;
      width: 880px;
      height: 250px;
    }
    .zhanwei1{
        height: 500px;
    }
</style>
