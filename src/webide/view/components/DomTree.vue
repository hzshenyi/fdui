<template>
  <ul  class="group"   v-for="(el, index) in elList">
    <li :class="{'checked':el.$$checked}">
      <span>&lt;{{el.tagName}}></span>
      <DomTree v-if="el.children" :elList="el.children"></DomTree>
      <span>&lt;/{{el.tagName}}></span>
      </li>
  </ul>
    
   
</template>
<style scoped>
  ul,li{ padding-left:10px;padding-top:3px;margin:0;list-style:none;cursor:pointer;}
  li.checked{background-color:burlywood;}
</style>
<script setup>
import {defineProps} from 'vue'

defineProps(
    {
         elList:{}
    }
)

</script>