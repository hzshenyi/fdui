<template>
    <DomTree :elList=data.children></DomTree>
    <button @click="editor.load()">test</button>
</template>
<script setup>
import {reactive} from 'vue'
import {getEditor} from './editor'
import DomTree from '../components/DomTree.vue'
let data = reactive({})
let editor = getEditor(data);

</script>