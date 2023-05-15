<template>
    <div class="bg_6">
        <Menu></Menu>
        <div class="zhanwei1"></div>
        <Draw></Draw>
    </div>
</template>

<script setup>
    import Draw from '../components/Draw.vue'
    import Menu from '../components/Menu.vue'


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
    .zhanwei1{
        height: 500px;
    }
</style>