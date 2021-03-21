<template>
  <ul  class="group"   v-for="(el, index) in elList">
    <li :class="[
      `nodeType-${el.$$nodeType}`,
      { actived: el.$$actived, overed: el.$$overed, fold: el.$$fold,cutted:el.$$cutted },
    ]">
    <!-- 非文本 -->
    <template v-if="el.tagName!='text'">
      <span class="fd-tag" @click="selectDom(el)"  @mouseover.stop="el.$$overed = true"  @mouseout="el.$$overed = false">&lt;{{el.tagName}}></span>
        <span  class="fd-innerHtml" v-if="el.innerHTML" @dblclick="modifyInnerHtml(el,$event)">
          <!-- 阅读模式 -->
          <span v-if="!el.$$edited"  class="fd-innerHtml-read">{{ el.innerHTML }}</span>
          </span>     
    
      <DomTree v-if="el.children" :elList="el.children"></DomTree>
      <span  class="fd-tag"  @click="selectDom(el)"  @mouseover.stop="el.$$overed = true"  @mouseout="el.$$overed = false">&lt;/{{el.tagName}}></span>
    </template>
    <!-- 如果是文本 -->
      <template v-if="el.tagName=='text'">
      <span   @mouseover.stop="el.$$overed = true"  @mouseout="el.$$overed = false" class="fd-innerHtml" v-if="el.innerHTML"
       @dblclick="modifyInnerHtml(el,$event)">
       <!-- 阅读模式 -->
       <span v-if="!el.$$edited"  class="fd-innerHtml-read">{{ el.innerHTML }}</span>
       </span>     
    </template>
      </li>
  </ul>
</template>
<style scoped>
  ul,li{ padding-left:10px;margin:0;list-style:none;border:solid 1px #E9EEF3;cursor:pointer;}
  li.overed{border:solid 1px rgb(250, 175, 175);}
  li.actived{border:solid 1px rgb(25, 43, 212);}
  .fd-tag{color:rgb(70, 132, 248)}
  .fd-innerHtml{white-space:break-spaces;background-color: #E9EEF3;}

</style>
<script setup>
import {defineProps} from 'vue'

defineProps(
    {
         elList:{}
    }
)
const selectDom = (el)=>{
  //先设置原选中的为未选中
 window.elSelected && ( window.elSelected.$$actived = null);
   el.$$actived = true;
    window.elSelected = el;
}
const modifyInnerHtml = (el,dom)=>{
 const spanObj = dom.currentTarget;
 const w = spanObj.offsetWidth+15;
 const h = spanObj.offsetHeight;
 const computedStyle = document.defaultView.getComputedStyle(spanObj, null); 
 const c = computedStyle.backgroundColor;
 //如果没有编辑字段
 if(spanObj.children.length==1){
  const textareaObj = document.createElement("textarea");
  textareaObj.innerHTML = el.innerHTML;
  // dom.currentTarget.innerHTML = `<textarea style="margin:0;padding:0;border:0;width:${w}px;height:${h}px;background-color:${c}">${el.innerHTML}</textarea>`
  textareaObj.style = `margin:0;padding:0;border:0;width:${w}px;height:${h}px;background-color:${c}`
  textareaObj.onchange = (e)=>{
      el.innerHTML = e.currentTarget.value;
      el.$$edited = false;
      e.currentTarget.style.display = "none";
  }
  spanObj.appendChild(textareaObj)
 }else{
   spanObj.children[1].style.display = "";//显示编辑字段
 }
 
 el.$$edited = !el.$$edited;
}
</script>