<template>
  <ul  class="group"   v-for="(el, index) in elList">
    <li :class="[
      `nodeType-${el.$$nodeType}`,
      { actived: el.$$actived, overed: el.$$overed, fold: el.$$fold,cutted:el.$$cutted },
    ]">
      <span  @click="selectDom(el)"  @mouseover.stop="el.$$overed = true"  @mouseout="el.$$overed = false">&lt;{{el.tagName}}></span>
      <span class="fd-innerHtml" v-if="el.innerHTML">{{ el.innerHTML }}</span>
      <DomTree v-if="el.children" :elList="el.children"></DomTree>
      <span  @click="selectDom(el)"  @mouseover.stop="el.$$overed = true"  @mouseout="el.$$overed = false">&lt;/{{el.tagName}}></span>
      </li>
  </ul>
    
   
</template>
<style scoped>
  ul,li{ padding-left:10px;margin:0;list-style:none;border:solid 1px #E9EEF3;cursor:pointer;}
  li.overed{border:solid 1px rgb(250, 175, 175);}
  li.actived{border:solid 1px rgb(25, 43, 212);}

</style>
<script setup>
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