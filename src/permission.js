import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/token' 

NProgress.configure({ showSpinner: false })// NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start()

  // if (to.path === '/login') {
  //   next()
  //   return
  // }

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
      return
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息    
        store.dispatch('GetUserInfo').then(resp => { // 拉取user_info
          store.dispatch('GetUserRouteMenu').then(resp => {
            var fmtRoutes = formatRoutes(resp)
            router.addRoutes(fmtRoutes)
            store.commit('SET_ROUTES', resp)
            next({ path: '/dashboard'})
            NProgress.done()
            return
          })
        })
      } else {
        next()
        return
      }
    }
  } else {
    next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    return
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

const formatRoutes = (routes)=> {
  let fmRoutes = [];
  routes.forEach(router=> {
      let {
      path,
      component,
      name,
      meta,
      iconCls,
      children
      } = router;
      if (children && children instanceof Array) {
      children = formatRoutes(children);
      }
      let fmRouter = {
      path: path,
      //component: resolve => require(['../components/HelloWorld.vue'], resolve),
      component(resolve){
          if (component.startsWith("Layout")) {
              require(['./views/layout/index.vue'], resolve)
          } else {
              require(['./views/'+ component +'.vue'], resolve)
          }
        },
      name: name,
      iconCls: iconCls,
      meta: meta,
      children: children
      };
      fmRoutes.push(fmRouter);
  })
  return fmRoutes;
}
