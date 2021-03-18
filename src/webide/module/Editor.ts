import {getAjax} from './Ajax'
import {getHtmlDom} from './HtmlDom'
class  Editor {
    data:any;
    ajax;
    htmlDom;
     constructor(data:any){
         this.data = data;
          this.ajax = getAjax();
          this.htmlDom = getHtmlDom();
     }
     load(){
       this.ajax.get("public/oa/test.html").then((html)=>{
           //加载资源模板后，解析为json对象，并放到this.data中
            this.htmlDom.transHtmlToJson(html,this.data);
        })
     }
}
const getEditor = function(data:{}){
   return new Editor(data)
}
export {getEditor}