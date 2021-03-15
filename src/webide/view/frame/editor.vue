<template>
    <div>{{data.title}}</div>
    <button @click="editor.load()">test</button>
</template>
<script setup>
import {reactive} from 'vue'
import {getEditor} from './editor'
let data = reactive({})
let editor = getEditor(data);
</script>