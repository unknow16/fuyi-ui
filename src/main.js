// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import {getRequest, postRequest4Form, postRequest4Json, deleteRequest, putRequest} from './utils/axios-request'

import 'font-awesome/css/font-awesome.min.css'
//import './assets/theme/element-#409eff/index.css'
import './assets/theme/element-#1F2225/index.css'

import './permission' // permission control

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest4Form = postRequest4Form
Vue.prototype.postRequest4Json = postRequest4Json
Vue.prototype.deleteRequest = deleteRequest
Vue.prototype.putRequest = putRequest

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
