import axios from 'axios'
axios.defaults.baseURL = "http://192.168.31.142:3000"
axios.interceptors.request.use(config=>{
  //  config.responseType = "json"
    return config
})
axios.interceptors.response.use(response=>{
    return response
})
class Ajax{
  constructor(){

  }
  get(url:string){
    var promise = new Promise(function(resolve, reject) {
      // 异步处理
      // 处理结束后、调用resolve 或 reject
      axios({
        method: "get",
        url: url
      }).then(res => {
        resolve(res.data);
      });
    });
    return promise;
    
}
}
const getAjax = function():Ajax{
  return new Ajax();
}
export {getAjax}
