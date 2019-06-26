import store from '../store'
import axios from 'axios'
export const ApiCheckTokenMixin = {
  methods: {
    checkToken () {
      axios
        .get(`${store.state.apiUrl}/check`, {
          headers: {
            'X-Auth-Token': store.state.token
          }
        })
        .then(res => {
          // login exipred
          // console.log(res)
          if (res.data.msg === '登陆过期') {
            // console.log(res.data.code)
            store.dispatch('setToken', '')
            localStorage.removeItem('token')
            // console.log('expired')
            this.expired()
          }
          if (res.data.msg === 'ok') {
            // console.log(res.data.code)
            store.dispatch('isLoginTrue')
          }
          if (res.data.msg === 'refresh') {
            // console.log(res.data.code)
            store.dispatch('setToken', res.data.result.token)
            store.dispatch('isLoginTrue')
          }
        })
      // .catch(err => console.log(err));
    },
    expired () {
      this.$router.push('/expireddialog')
    }

  }

}
