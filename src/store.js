import Vue from 'vue'
import Vuex from 'vuex'
import { bus } from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://47.90.100.229:20000/api',
    bankInfo: ''
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
    setBankInfo: (state, payload) => {
      state.bankInfo = payload
    },
    setUserInfo: (state, payload) => {
      state.userInfo = payload
      bus.$emit('doneSettingUserInfo')
    }

  },
  actions: {
    setToken: (context, payload) => {
      context.commit('setToken', payload)
    },
    removeToken: (context) => {
      context.commit('removeToken')
    },
    setBankInfo: (context, payload) => {
      context.commit('setBankInfo', payload)
    },
    setUserInfo: (context, payload) => {
      context.commit('setUserInfo', payload)
    }

  }
})
