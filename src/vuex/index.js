import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ls = window.localStorage;

const store = new Vuex.Store({
    state: {
        user: {
            username: ls.getItem('user') == null ? 'noLogin' : JSON.parse(ls.getItem('user')).username,
            realname: ls.getItem('user') == null ? '' : JSON.parse(ls.getItem('user')).realname,
            roles: ls.getItem('user') == null ? '' : JSON.parse(ls.getItem('user')).roles,
            avatar: ls.getItem('user') == null ? '' : JSON.parse(ls.getItem('user')).avatar
        },
        routes: []
    },
    mutations: {
        initMenu(state, menus){
            state.routes = menus;
        },
        login(state, user){
            state.user = user;
            ls.setItem('user', JSON.stringify(user));
        },
        logout(state){
            window.localStorage.removeItem('user');
            state.routes = [];
        },
    },
    actions: {

    }
})

export default store;