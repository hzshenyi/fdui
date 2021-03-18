<template>
  <div  class="group"   v-for="(el, index) in elList">
    <li>{{el.tagName}}</li>
   <DomTreeLeft v-if="el.children" :elList="el.children"></DomTreeLeft>
  </div>
</template>
<script setup>
import {defineProps} from 'vue'

defineProps(
    {
         elList:{}
    }
)

</script>