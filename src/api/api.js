import Vue from 'vue'
import Vuex from "vuex"
import axios from 'axios'
import Cookie from 'vue-cookies'
Vue.use(Vuex);
// Vue.use(axios);
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const store = new Vuex.Store({
  state: {
    //这里的状态和每个组件的数据属性有关系(data)
    login: {
      username:Cookie.get("username"),
      sessionid:Cookie.get("sessionid"),
      message:'',
    },
  },
  mutations: {
    Login(state, data) {
    state.login.username = data.username;
    state.login.sessionid = data.sessionid;
    state.login.message = data.message;

    Cookie.set("username", data.username, "20min")
      Cookie.set("sessionid", data.sessionid, "20min")

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
        // console.log(response.data.code);
        // console.log(response.data.data);
        // console.log(response.data.session_key);
        // console.log(response.data);

        if (response.data.code===200){
          context.commit('Login',{username:return_data.username,sessionid:response.data.session_key,message:response.data.data});
        }
        else {
          context.commit('Login',{username:return_data.username,sessionid:response.data.session_key,message:response.data.data});
        }

      }).catch(function (error) {
        //请求失败
        console.log(error)
      })
    },
  }
});

export default  store
