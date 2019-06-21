<template>
  <v-app>
    <v-content class="yellow darken-4">
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import BottomNav from './components/BottomNav.vue'
import axios from 'axios'
const qs = require('qs')
export default {
  name: 'App',
  components: {
    BottomNav
  },
  data () {
    return {}
  },
  // computed: {
  //   isLogin: function() {
  //     return this.$store.state.isLogin;
  //   }
  // },
  // watch: {
  //   isLogin: function(toGet) {
  //     if (toGet) {
  //       this.getUserInfo();
  //       // this.getDepositeInfo();
  //     }
  //   }
  // },
  methods: {
    getUserInfo () {
      axios
        .get(`${this.$store.state.apiUrl}/account/getUserInfo`, {
          headers: {
            'X-Auth-Token': this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch('setUserInfo', res.data.result)
        })
        // .catch(err => console.log(err));
    },
    getDepositeInfo () {
      axios
        .get(`${this.$store.state.apiUrl}/account/deposit/paytypes`, {
          headers: {
            'X-Auth-Token': this.$store.state.token
          }
        })
        .then(res => {
          // console.log(res.data)
          this.$store.dispatch('setDepositeInfo', res.data.result)
        })
        // .catch(err => console.log(err));
    }

  },
  created () {
  },
  mounted () {
    if (localStorage.getItem('token') != null) {
      this.$store.dispatch('setToken', localStorage.getItem('token'))
      // check login status api should be applied here
      // apiMethods.checkToken();
    }
  }
}
</script>
