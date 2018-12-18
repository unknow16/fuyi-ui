// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex'
import ElementUI from 'element-ui'
import {getRequest, postRequest4Form, postRequest4Json, deleteRequest, putRequest} from './utils/axios-request'
import {initMenu} from './utils/common-api'

import 'font-awesome/css/font-awesome.min.css'
import './assets/theme/element-#409eff/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest4Form = postRequest4Form
Vue.prototype.postRequest4Json = postRequest4Json
Vue.prototype.deleteRequest = deleteRequest
Vue.prototype.putRequest = putRequest

router.beforeEach((to, from, next)=> {
  if (to.name == 'Login') {
    next();
    return;
  }

  // 此处获取name时，一定会有值
  var name = store.state.user.username;
  console.log("login username = " + name);

  if (name == 'noLogin') {
    // 未登录跳到'/login',并带上重定向参数
    next({path: '/login', query: {redirect: to.path}})
  } else {
    initMenu(router, store);
    next();
  }
}
)

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
