import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Main from '@/views/Main'
import Dashboard from '@/views/Dashboard'
import Member from '@/views/Member'
import Login from '@/views/Login'

import HelloWorld from '@/components/HelloWorld'

import ParentSlot from '@/components/ParentSlot'
import ChildSlot from '@/components/ChildSlot'

import ParentSlotNamed from '@/components/ParentSlotNamed'
import ChildSlotNamed from '@/components/ChildSlotNamed'

import ParentSlotScope from '@/components/ParentSlotScope'
import ChildSlotScope from '@/components/ChildSlotScope'

// demo
import VuexParent from '@/demo/vuex/VuexParent'
import PropParent from '@/demo/prop/PropParent'
import PropParentVuex from '@/demo/prop/PropParentVuex'

let routes = [
  {
    path: '/',
    redirect: '/login'   // 重定向
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    hidden: true,
    children: [{
      path: '/',
      name: '首页',
      component: Dashboard
    }]
  }
]

routes.push({
  path: '/member',
  name: '会员管理',
  component: Main,
  iconCls: 'fa fa-user-circle-o',
  children: [
    {
      path: '/member/hello',
      component: HelloWorld,
      name: 'Hello'
    }, {
      path: '/member/data',
      component: Member,
      name: '会员信息管理'
    }
  ]
})

routes.push({
  path: '/slot',
  name: 'slot',
  component: Main,
  iconCls: 'fa fa-user-circle-o',
  children: [
    {
      path: '/demo/slot1',
      component: ParentSlot,
      name: 'ParentSlot'
    },{
      path: '/demo/slot2',
      component: ChildSlot,
      name: 'ChildSlot'
    }
  ]
})

routes.push({
  path: '/slotNamed',
  name: 'slotNamed',
  component: Main,
  iconCls: 'fa fa-user-circle-o',
  children: [
    {
      path: '/demo/slot3',
      component: ParentSlotNamed,
      name: 'ParentSlotNamed'
    },{
      path: '/demo/slot4',
      component: ChildSlotNamed,
      name: 'ChildSlotNamed'
    }
  ]
})

routes.push({
  path: '/slotScope',
  name: 'slotScope',
  component: Main,
  iconCls: 'fa fa-user-circle-o',
  children: [
    {
      path: '/demo/slot5',
      component: ParentSlotScope,
      name: 'ParentSlotScope'
    },{
      path: '/demo/slot6',
      component: ChildSlotScope,
      name: 'ChildSlotScope'
    }
  ]
})

routes.push({
  path: '/vuexDemo',
  name: 'VuexDemo',
  component: Main,
  iconCls: 'fa fa-camera-retro',
  children: [
    {
      path: '/vuexDemo/vuexParent',
      name: 'VuexParent',
      component: VuexParent
    },
    {
      path: '/propDemo/propParent',
      name: 'PropParent',
      component: PropParent
    }, {
      path: '/propDemo/propParentVuex',
      name: 'PropParentVuex',
      component: PropParentVuex
    }
  ]
})



const router = new Router({
  routes: routes
})

export default router

// export default new Router({
//   routes: routes
// })
