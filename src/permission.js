import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/token' 

NProgress.configure({ showSpinner: false })// NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (to.path === '/login') {
    next()
    return
  }
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
      
        //store.dispatch('GetUserInfo').then(resp => { // 拉取user_info
          store.dispatch('GetUserRouteMenu').then(resp => {
            //router.addRoutes(resp.menuList)
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            return
          })
        //})

        NProgress.done()
      } else {
        next()
        return
      }
    }
  } else {
    next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
