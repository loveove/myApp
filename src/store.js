import Vue from 'vue'
import Vuex from 'vuex'
// import { bus } from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://47.90.100.229:20000/api',
    token: null,
    userInfoDefaultTab: 0

  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload
      localStorage.setItem('token', payload)
    },
    removeToken: (state) => {
      state.token = null
      localStorage.removeItem('token')
    },
    setUserInfoDefaultTab: (state, payload) => {
      state.userInfoDefaultTab = payload
    }
    // setBankInfo: (state, payload) => {
    //   state.bankInfo = payload
    // }

  },
  actions: {
    setToken: (context, payload) => {
      context.commit('setToken', payload)
    },
    removeToken: (context) => {
      context.commit('removeToken')
    },
    setUserInfoDefaultTab: (context, payload) => {
      context.commit('setUserInfoDefaultTab', payload)
    }
    // setBankInfo: (context, payload) => {
    //   context.commit('setBankInfo', payload)
    // }

  }
})
