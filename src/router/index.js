import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import index from '@/components/index'
import exam from '@/components/Example_for_vuex'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/exam',
      name: 'exam',
      component: exam
    }

  ]
})
