import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import errorLog from './modules/errorLog'
// import tagsView from './modules/tagsView'
import auth from './modules/auth'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      //app,
      //errorLog,
      //tagsView,
      auth
    },
    getters
  })

export default store;