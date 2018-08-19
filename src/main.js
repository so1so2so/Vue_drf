// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from "vuex"
import App from './App'


import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Cookies from 'universal-cookie';

var cookies = new Cookies();
Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(Vuex);
Vue.use(axios);

// import stores from "./api/api"
axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
const store = new Vuex.Store({
  state: {
    //这里的状态和每个组件的数据属性有关系(data)
    alllist: [],
    login: {
      username:'',
      password: '',
    },
    csrf:'',
  },
  mutations: {
    Login(state, data) {
    state.login = data
    },
  },
  actions: {
    login(context,return_data) {
      // console.log(axios.defaults.headers)
      const that =this;
      axios.request({
        url:'/login/',
        method:'post',
        data:return_data,
        // headers: {"X-CSRFToken": cookies.get('csrftoken')},
        }
      ).then(function (response) {
        //请求成功
        context.commit('Login',response);
        // console.log(headers)
      }).catch(function (error) {
        //请求失败
        console.log(error)
      })
    },
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // stores,
  store,
  components: { App },
  template: '<App/>'
});
