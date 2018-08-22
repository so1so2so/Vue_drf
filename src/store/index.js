import Vue from 'vue'
import Vuex from "vuex"
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import axios from 'axios'
import Cookie from 'vue-cookies'
Vue.use(Vuex);
const state={
  count:0
};
const store =new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
export default store

