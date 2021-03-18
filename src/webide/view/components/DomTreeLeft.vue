<template>
  <ul  class="group"   v-for="(el, index) in elList">
    <li>
      <span @click="selectDom(el)">{{el.tagName}}</span>
      <DomTreeLeft v-if="el.children" :elList="el.children"></DomTreeLeft>
      </li>
  </ul>
    
   
</template>
<style scoped>
  ul,li{ padding-left:10px;padding-top:3px;margin:0;list-style:none;cursor:pointer;}
  li.checked{background-color:burlywood;}
  
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
 window.elSelected && ( window.elSelected.$$checked = null);
   el.$$checked = true;
    window.elSelected = el;
}
</script>