import Vue from 'vue'
import Vuex from "vuex"
import axios from 'axios'
import Cookie from 'vue-cookies'

Vue.use(Vuex);
// Vue.use(axios);
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const store = new Vuex.Store({
  state: {
    //这里的状态和每个组件的数据属性有关系(data)
    login: {
      username: Cookie.get("username"),
      token: Cookie.get("token"),
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
      state.login = data;
    },
    Getserver(state, data) {
      state.serverinfo = data.data.results
    },
    Logout(state){
      state.login.username = null;
      state.login.token = null
    }
  },
  getters:{
    getservers(state){
      return state.serverinfo
    },
    getuser(state){
      return state.login.username
    },
  },
  actions: {
    login(context, return_data) {
      Cookie.set("username", return_data.username, "20min");
      Cookie.set("token", return_data.token, "20min");
      context.commit('Login', return_data)
    },
    login_out(context) {
      Cookie.remove('username');
      Cookie.remove('token');
      context.commit('Logout')

    },
    getserver(context) {
      axios.request({
          url: '/GetServer/',
          method: 'get',
          params:{
            token: this.state.login.token
          }
        }
      ).then(function (response) {
        // console.log(response.data);
        context.commit('Getserver', response)
      }).catch(function (error) {
        //请求失败
        console.log(error)
      })
    },
  }
});
export default store
