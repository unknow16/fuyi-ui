// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 导入路由表
import router from "./router"

// 集成element-ui
import ElementUI from "element-ui"
import './assets/theme/element-#CBE80B/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

// 1. 导入组件
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app', // 4.App组件中内容填充到index.html的id为app的div中
  router,
  components: { App }, // 2.声明组件
  template: '<App/>' // 3.模版中使用，因为main.js为js文件,只能用属性声明
})
