import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/js/all.min.js'

Vue.config.productionTip = false
export const bus = new Vue()
export const apiMethods = {

}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
