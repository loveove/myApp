import Vue from 'vue'
import Vuex from 'vuex'
import { bus } from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://47.90.100.229:20000/api',
    bankInfo: '',
    userInfo: '',
    isLogin: false,
    depositeInfo: [
      { "balanceEnd": 2000000, "balanceStart": 100, "code": "OFFLINE_BANK", "name": "快速入款", "gift_rate": 1, "gift_max": 388 },
      { "balanceEnd": 2999, "balanceStart": 1, "code": "ONLINE_ALIPAY", "name": "支付宝扫码", "gift_rate": 1, "gift_max": 388 }
    ],
    qrHtml: '',
    agentInfo: {}
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
    },
    setQrHtml: (state, payload) => {
      state.qrHtml = payload
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

  }
})
