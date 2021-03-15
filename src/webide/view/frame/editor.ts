import {getAjax} from '../../lib/Ajax'
import {getHtmlDom} from '../../lib/HtmlDom'
class  Editor {
    data;
    ajax;
    htmlDom;
     constructor(data:any){
          this.data = data
          this.ajax = getAjax();
          this.htmlDom = getHtmlDom();
     }
     load(){
       this.ajax.get("public/oa/test.html").then((html)=>{
            this.htmlDom.transHtmlToJson(html);
        })
     }
}
const getEditor = function(data:{}){
   return new Editor(data)
}
export {getEditor}