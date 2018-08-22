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
      username: Cookie.get("username"),
      sessionid: Cookie.get("sessionid"),
      message: '',
      code:null,
    },
    serverinfo:[{
      asset: '',
      created_by: "",
      hosted_on: "",
      id: '',
      model: "",
      os_distribution: "",
      os_release: "",
      os_type: "",
      raid_type: "111",
      sub_asset_type: '222',
    }]
  },
  mutations: {
    Login(state, data) {
      state.login.username = data.username;
      state.login.sessionid = data.sessionid;
      state.login.message = data.message;
      state.login.code = data.code;

      Cookie.set("username", data.username, "20min");
      Cookie.set("sessionid", data.sessionid, "20min")

    },
    Getserver(state, data) {
      state.serverinfo = data.data.results
    }
  },
  getters:{
    getservers(state){
      return state.serverinfo
    },
    getloginmessage(state){
      return state.login.message
    },
    getlogincode(state){
      return state.login.code
    }
  },
  actions: {
    login(context, return_data) {
      axios.request({
          url: '/login/',
          method: 'post',
          data: return_data,
        }
      ).then(function (response) {
        // console.log(response);
        if (response.data.code === 200) {
          context.commit('Login', {
            username: return_data.username,
            sessionid: response.data.session_key,
            message: response.data.message,
            code:response.data.code,
          });
        }
        else {
          context.commit('Login', {
            username: return_data.username,
            sessionid: response.data.session_key,
            message: response.data.message,
             code:response.data.code,
          });
        }

      }).catch(function (error) {
        //请求失败
        console.log(error)
      })
    },
    login_out(context, return_data) {

    },
    getserver(context) {
      axios.request({
          url: '/api/v1/GetServer/',
          method: 'get',
        }
      ).then(function (response) {
        // console.log(response.data);
        context.commit('Getserver', response)
      }).catch(function (error) {
        //请求失败
        console.log(error)
      })
    }
  }
});
export default store
