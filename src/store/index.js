import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './modules/loginmodule'
import menu from './modules/menu'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginModule,
    menu
  },
  plugins: [
    createPersistedState({
      path: ['loginModule', 'menu']
    })
  ]
})
