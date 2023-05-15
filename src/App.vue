<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  left: 0px;
  top: 0px;
  --v: 200;
}

/* 弹幕动画 */
@keyframes danmu{
  0%{
      right: calc((0 - var(--box_w) - var(--box_left))*1px);
  }
  100%{
      translate: calc((0 - 1536 - var(--box_w) - var(--box_left))*1px);
  }
}

/* 阴影闪烁动画 */
@keyframes shining{
  0%{
    box-shadow: 5px 3px 3px var(--shadow_color);
    /* width: ; */
  }
  50%{
    box-shadow: 0px 0px 3px var(--shadow_color_middle);
  }
  100%{
    box-shadow: 5px 3px 3px var(--shadow_color);
  }
}
/* 缩放动画 */
@keyframes zooming{
  0%{
   transform: scale(1);
  }
  50%{
    transform: scale(var(--scale_num));
  }
  100%{
    transform: scale(1);
  }
}
/* 逆时针旋转+缩放 */
@keyframes rolling_zooming {
  0% {
    transform: rotate(360deg) scale(1);
  }
  25% {
    transform: rotate(270deg) scale(var(--scale_num));
  }
  50%{
    transform: rotate(180deg) scale(1);
  }
  75%{
    transform: rotate(90deg) scale(var(--scale_num));
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
</style>
