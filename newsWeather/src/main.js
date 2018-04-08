import Vue from 'vue';
import App from './App';
import router from './router';
import Mock from '../src/mock/mock.js';

Vue.config.productionTip = false;

// 全局代理地址
global.Api_Proxy = "https://bird.ioliu.cn/v1/?url=";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
