import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Tree from '@/pages/tree/Tree'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path: '/tree',
      name: 'Tree',
      component: Tree
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }]
})