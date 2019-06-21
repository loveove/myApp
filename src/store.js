import Vue from 'vue'
import Vuex from 'vuex'
import { bus } from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://47.90.100.229:20000/api',
    apiGameUrl: 'https://new.xjj3.com/api',
    bankInfo: '',
    token: '',
    userInfo: '',
    isLogin: false,
    isExipired: false,
    depositeInfo: [
      { 'balanceEnd': 2000000, 'balanceStart': 100, 'code': 'OFFLINE_BANK', 'name': '快速入款', 'gift_rate': 1, 'gift_max': 388 },
      { 'balanceEnd': 2999, 'balanceStart': 1, 'code': 'ONLINE_ALIPAY', 'name': '支付宝扫码', 'gift_rate': 1, 'gift_max': 388 }
    ],
    qrHtml: '',
    agentInfo: {}
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload
      localStorage.setItem('token', payload)
      state.isLogin = true
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
    },
    setQrHtml: (state, payload) => {
      state.qrHtml = payload
    },
    isLoginTrue: (state) => {
      state.isLogin = true
    },
    isLoginFalse: (state) => {
      state.isLogin = false
    },
    setExipredFail: (state) => {
      state.isExipired = false
    },

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
    },
    setQrHtml: (context, payload) => {
      context.commit('setQrHtml', payload)
    },
    isLoginTrue: (context) => {
      context.commit('isLoginTrue')
    },
    isLoginFalse: (context) => {
      context.commit('isLoginFalse')
    },
    setExipredFail: (context) => {
      context.commit('setExipredFail')
    },

  }
})
