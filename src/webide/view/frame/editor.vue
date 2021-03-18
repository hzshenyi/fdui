<template>
    <DomTree :elList=data.children></DomTree>
</template>
<script setup>
import {reactive,onMounted} from 'vue'
import {getEditor} from './editor'
import DomTree from '../components/DomTree.vue'
let data = reactive({})
let editor = getEditor(data);
//挂载后加载资源
onMounted(()=>{
    editor.load();
})
</script>