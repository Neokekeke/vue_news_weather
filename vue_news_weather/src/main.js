import Vue from 'vue';
import App from './App';
import router from './router';
import Mock from '../src/mock/mock.js';

Vue.config.productionTip = false;

// 全局代理地址，适用于axios跨域
global.Api_Proxy = "https://bird.ioliu.cn/v1/?url=";

// 极速数据的appkey
global.App_key = "43c41b07a67e828b";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 路由重定向
router.push('/home/movie/top250');
