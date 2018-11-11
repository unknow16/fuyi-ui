import Vue from "vue";

// 要告诉 vue 使用 vueRouter
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 引入组件
import Login from "@/views/login/Login"
import Home from '@/views/home/Home'


const routes = [
    // 重定向
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    }
]

var router =  new VueRouter({
    routes
})
export default router;