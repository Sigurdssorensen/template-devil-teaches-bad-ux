import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    navbarWidth: '250px'
  },
  mutations: {
    'SET_AUTH_STATUS' (state, payload) {
      state.authenticated = payload
    },
    'SET_NAVBAR_WIDTH' (state, payload) {
      state.navbarWidth = payload
    }
  },
  actions: {
    authenticate: ({ commit }, payload) => {
      commit('SET_AUTH_STATUS', payload)
    },
    setNavbarWidth: ({ commit }, payload) => {
      commit('SET_NAVBAR_WIDTH', payload)
    }
  },
  getters: {
    getAuthStatus: state => {
      return state.authenticated
    },
    getNavbarWidth: state => {
      return state.navbarWidth
    }
  }
})
