// 定义html文本类
class HtmlDom{
    constructor(){

    }
    transHtmlToJson(html:any,data:any){
      let dom = this.parseHtmlToDom(html);
      this.parseDomToJson(dom,data);
    }
    parseHtmlToDom(html:string) {
        let domRoot = new DOMParser().parseFromString(html, "text/html");
        let resourceTemplateDom = domRoot.querySelector("template");
        // resourceTemplateDom && (resourceTemplateDom.content.$$root = resourceTemplateDom);
        return resourceTemplateDom&&resourceTemplateDom.content;
      }
    parseDomToJson(dom:any,data:any) {
        if(!dom){return {}}
        let newDom:any;
        data["tagName"] = "template";
        data["children"] = [];
        for (var i = 0; i < dom.children.length; i++) {
          newDom = {};
          data.children.push(this._getJsonByDom(dom.children[i]))
        }
        return data;
      }
      _getJsonByDom(dom:any) {
          let json:any = {};
        if(dom.nodeType==3){//表示纯文本节点
            json["tagName"] = "text";
            json["innerHTML"] = dom.nodeValue;
            json["$$nodeType"] = dom.nodeType;
            return json;
         }
         json["$$nodeType"] = dom.nodeType;
         json["tagName"] = dom.localName;
         if(dom.children.length==0){
            json["innerHTML"] = dom.innerHTML;
          
         }
         let attList = dom.attributes;
         for(let i = 0;i<attList.length;i++){
             let att = attList[i];
             json[att.name] = att.value;
         }
        // json.$$targetDom = dom;
        if(!dom.children){return json}//如果没有子节点则退出
        let domList=[];
        if(dom.children.length>0){
          domList = dom.childNodes;
        }else{
          domList = dom.children;   
        }
       
        if(domList.length>0){
            json.children = [];
            for(let i=0;i<domList.length;i++){
                if(domList[i].nodeType==3 && domList[i].nodeValue.trim()==""){//如果是文本节点
                 continue
                }
             let json1 = this._getJsonByDom(domList[i]);
             json.children.push(json1);
            }
        }
       return json;
      }
}
const getHtmlDom = ()=>{
    return new HtmlDom();
}
export { getHtmlDom }