import Vue from 'vue'
import Vuex from "vuex"
import axios from 'axios'
Vue.use(Vuex);
Vue.use(axios);
axios.defaults.baseURL = 'http://127.0.0.1:8000';
const store = new Vuex.Store({
  state: {
    //这里的状态和每个组件的数据属性有关系(data)
    alllist: [],
    login: {
      username:'',
      password: '',
    },
  },
  mutations: {
    Login(state, data) {
    state.login = data
    }
  },
  actions: {
    login(context,return_data) {
      axios.request({
        url:'/login/',
        method:'post',
        data:return_data
        }
      ).then(function (response) {
        //请求成功
        context.commit('Login',response);
        console.log(response)
      }).catch(function (error) {
        //请求失败
        console.log(error)
      })
    }

  }
});
export default{
  store,
}
