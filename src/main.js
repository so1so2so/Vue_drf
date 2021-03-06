// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI, {size: 'small',});

import store from "./api/api"
// import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
//拦截器
router.beforeEach(function (to, from, next) {
  if(to.meta.requireAuth){
    // 要去的url只有登陆成功后才能访问
    if (store.state.login.token) {
      console.log("已登录")
      next()
    } else {
      console.log("没登录,跳转");
      //query: {backUrl: to.fullPath}} 登录后跳转的原地址
      next({name: 'login',query: {backUrl: to.fullPath}})
    }
  }else{
    next()
  }
});
