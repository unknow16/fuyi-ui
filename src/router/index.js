import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import User from "../components/User.vue"

import Phone from "../components/Phone.vue"
import Tablet from "../components/Tablet.vue"
import Computer from "../components/Computer.vue"

import AboutChild from "../components/AboutChild.vue"

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        // // 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
        component: Home,
        children: [
            {
                path: "phone",
                component: Phone
            },
            {
                path: "computer",
                component: Computer
            },
            {
                path: "tablet",
                component: Tablet
            },
            {
                path: "",
                component: Phone
            }
        ]
    },
    {
        path: "/about",
        component: About,
        children: [
            {
                path: 'aboutChild',
                name: 'aboutChild',
                component: AboutChild
            }
        ]
    },

    // 重定向
    {
    	path: '/',
    	redirect: '/home'
    },

    // 动态路由
    {
        path: '/user/:id',
        component: User
    }
]

var router =  new VueRouter({
    routes
})
export default router;