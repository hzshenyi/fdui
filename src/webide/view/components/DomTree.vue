<template>
  <ul  class="group"   v-for="(el, index) in elList">
    <li :class="[
      `nodeType-${el.$$nodeType}`,
      { actived: el.$$actived, overed: el.$$overed, fold: el.$$fold,cutted:el.$$cutted },
    ]">
      <span>&lt;{{el.tagName}}></span>
      <DomTree v-if="el.children" :elList="el.children"></DomTree>
      <span>&lt;/{{el.tagName}}></span>
      </li>
  </ul>
    
   
</template>
<style scoped>
  ul,li{ padding-left:10px;padding-top:3px;margin:0;list-style:none;border:solid 1px #E9EEF3;cursor:pointer;}
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

</script>