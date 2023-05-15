<template>
    <div class="bg-container">
        <div class="card" @click="pageto4"></div>
    </div>
    <div class="bg3"></div>

</template>

<script setup>
import router from '@/router';
import { useStore } from 'vuex';

  const store = useStore()
  const pageto4 = ()=>{
    store.commit('countchange', 1)
    if(store.state.count % 2 === 0){
      router.push('/page4')
    }else{
      router.push('/page3')
    }
  }
</script>

<style>
.bg-container{
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 222;
  width: 1536px;
  height: 864px;
  /* width: 768px;
  height: 432px; */
  overflow: hidden;
}
.bg3 {
  background-image: url("../assets/page3/bg3.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1536px;
  height: 864px;
  z-index: 105;
}
.card {
  background-image: url("../assets/page3/card.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 0px;
  top: 73px;
  width: 3840px;
  height: 2136px;
  /* width: 736px;
  height: 348px; */
  z-index: 123;
  animation: move;
  animation-iteration-count: infinite;
  animation-duration: 15000ms;
  animation-timing-function: linear;
}
@keyframes move{
    from{
        transform: translate(0px,0px);
    }
    to{
        transform: translate(-2304px,calc(-2340px * tan(22.5deg)));
    }
}

</style>