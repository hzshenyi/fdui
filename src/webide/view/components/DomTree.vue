<template>
  <div
    class="group"
    @click.stop="resourceTreeApi.selectElement(el,elList,index)"
    :class="[
      `nodeType-${el.$$nodeType}`,
      { actived: el.$$actived, overed: el.$$overed, fold: el.$$fold,cutted:el.$$cutted },
    ]"
    v-for="(el, index) in elList"
    @mouseover.stop="el.$$overed = true"
    @mouseout="el.$$overed = false"
  >
    <span v-if="el.children"  @click="fold(el)" class="foldIcon">-</span>
    <div class="line">
      <span v-show="el.$$nodeType != 3"
        >&lt;{{ el.tagName }}
        <!-- <span v-for="propName in getPropList(el)" class="prop"
          >{{ propName }}=<span class="prop1"
            ><span style="width: 100%">{{ el[propName] }}</span
            ><input
              type="text"
              v-model="el[propName]"
              @change="domChange(el, propName)" /></span
          ><span class="autoSize">{{ el[propName] }}</span></span
        > -->
        ></span
      >
    </div>
     <span class="prop1" v-if="!el.children"
      ><span style="width: 100%">{{ el.innerHTML }}</span
      ><input
        type="text" class="innerHTML"
        v-model="el.innerHTML"
        @change="domChangeInnerHtml(el)" 
    /></span>
    <!-- 如果有子控件并且有innerHTML则显示一个不能编辑的html 2021-03 -->
     <div class="group" v-if="el.children&&el.innerHTML"
      ><span style="width: 100%">{{ el.innerHTML }}</span></div>
      <!-- 替归显示子控件 -->
    <ResourceTree v-if="el.children" :elList="el.children"></ResourceTree>
   
    <span class="tagEnd" v-show="el.$$nodeType != 3"
      >&lt;/{{ el.tagName }}></span
    >
  </div>
</template>
<script>
export default {
    props:{
         elList:{

         }
    }
}
</script>