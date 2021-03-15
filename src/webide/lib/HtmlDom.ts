// 定义html文本类
class HtmlDom{
    constructor(){

    }
    transHtmlToJson(html:any){
        debugger
      let dom = this.parseHtmlToDom(html);
      let data = this.parseDomToJson(dom);
       return data;
    }
    parseHtmlToDom(html:string) {
        let domRoot = new DOMParser().parseFromString(html, "text/html");
        let resourceTemplateDom = domRoot.querySelector("template");
        // resourceTemplateDom && (resourceTemplateDom.content.$$root = resourceTemplateDom);
        return resourceTemplateDom&&resourceTemplateDom.content;
      }
      parseDomToJson(dom:any) {
        if(!dom){return {}}
        let newDom:any;
        let domJson = { tagName: "template", children: [] };
        for (var i = 0; i < dom.children.length; i++) {
          newDom = {};
          domJson.children.push(newDom);
          //this._parseDom(dom.children[i], newDom);
        }
        return domJson;
      }
}
const getHtmlDom = ()=>{
    return new HtmlDom();
}
export { getHtmlDom }