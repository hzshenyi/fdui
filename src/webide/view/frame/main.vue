<template>
  <el-container style="height:100%">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="300px">
        <DomTreeLeft :elList=data.children></DomTreeLeft>
      </el-aside>
      <el-main>
        <DomTree :elList=data.children></DomTree>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>

import {reactive,onMounted} from 'vue'
import {getEditor} from '../../module/Editor'
import DomTreeLeft from '../components/DomTreeLeft.vue'
import DomTree from '../components/DomTree.vue'
let data = reactive({})
let editor = getEditor(data);
//挂载后加载资源
onMounted(()=>{
    editor.load();
})

</script>
<style scoped>
  .el-header, .el-footer {
    background-color: #5d6165;
    color: white;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>