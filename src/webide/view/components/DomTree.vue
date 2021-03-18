<template>
  <ul  class="group"   v-for="(el, index) in elList">
    <li>
      <span>&lt;{{el.tagName}}></span>
      <DomTree v-if="el.children" :elList="el.children"></DomTree>
      <span>&lt;/{{el.tagName}}></span>
      </li>
  </ul>
    
   
</template>
<script setup>
import {defineProps} from 'vue'

defineProps(
    {
         elList:{}
    }
)

</script>