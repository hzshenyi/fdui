<template>
  <ul  class="group"   v-for="(el, index) in elList">
    <li :class="[
      `nodeType-${el.$$nodeType}`,
      { actived: el.$$actived, overed: el.$$overed, fold: el.$$fold,cutted:el.$$cutted },
    ]">
      <div @click="selectDom(el)"  @mouseover.stop="el.$$overed = true"  @mouseout="el.$$overed = false">{{el.tagName}}</div>
      <DomTreeLeft v-if="el.children" :elList="el.children"></DomTreeLeft>
      </li>
  </ul>
    
   
</template>
<style scoped>
  ul,li{ padding-left:10px;padding-top:3px;margin:0;list-style:none;border:solid 1px #D3DCE6;cursor:pointer;}
  li.overed{border:solid 1px rgb(250, 175, 175);}
  li.actived{border:solid 1px rgb(25, 43, 212);}
  
</style>
<script setup lang="ts">
import {defineProps} from 'vue'
defineProps(
    {
         elList:{}
    }
)
const selectDom = (el)=>{
  //先设置原选中的为未选中
 window.elSelected && ( window.elSelected.$$actived = null);
   el.$$actived = true;
    window.elSelected = el;
}
</script>