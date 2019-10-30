// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import store from './store'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import FastClick from 'fastclick';

Vue.prototype.$http = axios
Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
  FastClick.attach(document.body
  )
  }, false);
}
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
