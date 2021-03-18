<template>
  <ul  class="group"   v-for="(el, index) in elList">
    <li>{{el.tagName}}
      <DomTreeLeft v-if="el.children" :elList="el.children"></DomTreeLeft>
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