import Vue from 'vue'
import Vuex from "vuex"
import axios from 'axios'
Vue.use(Vuex);
// Vue.use(axios);
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const store = new Vuex.Store({
  state: {
    //这里的状态和每个组件的数据属性有关系(data)
    login: {username:'', password: '',},
  },
  mutations: {
    Login(state, data) {
    state.login = data
    },
  },
  actions: {
    login(context,return_data) {
      const that =this;
      axios.request({
        url:'/login/',
        method:'post',
        data:return_data,
        }
      ).then(function (response) {
        //请求成功
        console.log(response);
        context.commit('Login',response);
      }).catch(function (error) {
        //请求失败
        console.log(error)
      })
    },
  }
});

export default  store
