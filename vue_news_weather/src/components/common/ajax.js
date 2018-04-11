import $ from 'jquery';
import axios from 'axios';

// 封装异步请求逻辑层
// axios GET
export default {

  // axios GET
  axiosGet : function(url , dataList){

      return new Promise((resolve , reject) => {
        // axios本来就是用了promise，外层再套一层。。。
        axios.get(Api_Proxy + url).then(res => {
          dataList = res.data;
          resolve(dataList);
          console.log(dataList);
        }).catch(err =>{
          reject(err);
          console.log(err);
        });
      });
  },

  // jquery GET
  jqGet : function(url , data){

    return new Promise((resolve , reject) => {
        // 用到了jquery ajax , 不能同步的异步 ，此方法不可用
        $.ajax({
          url : url,
          type : 'get',
          data : data,
          dataType : "jsonp",
          success : res => {
            resolve(res);
          },
          error : err => {
            reject(err);
            console.log(err);
          }
      });
    });

  }
}
