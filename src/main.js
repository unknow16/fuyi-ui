// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入路由表
import router from "./router"

// 引入vuex
import store from './vuex'

// 集成element-ui
import ElementUI from "element-ui"
import './assets/theme/element-#409eff/index.css'
Vue.use(ElementUI)

// 引入字体
import 'font-awesome/css/font-awesome.min.css'

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 开发模式开启mock.js
if (process.env.NODE_ENV === 'development') {
  //require('./mock')
}

Vue.config.productionTip = false

// 1. 导入组件
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app', // 4.App组件中内容填充到index.html的id为app的div中
  router,
  store,
  components: { App }, // 2.声明组件
  template: '<App/>' // 3.模版中使用，因为main.js为js文件,只能用属性声明
})