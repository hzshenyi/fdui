<template>
  <mainFrame></mainFrame>
</template>
<script setup lang="ts">
import mainFrame from './webide/view/frame/main.vue'
</script>

<style>
html,body,#app{width:100%;height: 100%;margin:0;}
* {
  font-family:"Microsoft YaHei";font-size:14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input,button,select,textarea{outline:none}
</style>