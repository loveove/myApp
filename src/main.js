import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/js/all.min.js'
import axios from "axios";

Vue.config.productionTip = false
export const bus = new Vue()
export const apiMethods = {
  getUserInfo() {
    axios
      .get(`${store.state.apiUrl}/account/getUserInfo`, {
        headers: {
          "X-Auth-Token": store.state.token
        }
      })
      .then(res => {
        store.dispatch("setUserInfo", res.data.result);
      })
    // .catch(err => console.log(err));
  },

}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
