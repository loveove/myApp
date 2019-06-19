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

    // CheckLogin() {
    //   axios({
    //     method: "get",
    //     url: "http://47.90.100.229:20000/api/account/check",

    //     // responseType: "stream"
    //     headers: {
    //       "X-Auth-Token":
    //         "aff72ceca3272ed4a9184e395a0f6e1d5d828191ac0d1a7017200c3adf084f161cd6238ed7ebe622f32a39a837f3b3bcbe5413cfc44bf2d11d04f4bff126b0a1fDTesV1YD2IeWAAoez7nLgcdmM+xGzA3Gl/rH0L3w9EeOg+eDqrzFT7tJxFIRVUrbF49Uk8KmI9nBV0Ef/jsYTRwEvO/jmdo0qSMbJq7f7jj58/Oy8X9HfUnqQoJPUdKlWJBfTZCSTzF6gprFVplcdXSKf/JkwmDxFiXokYj0LE="
    //     }
    //   })
    //     .then(function(response) {
    //       // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },

  },
  created () {
    // this.login();
    // this.getUserInfo();
    // this.userRegisteration();
    // this.Updatelogin();
    // this.GetBankList();
    // this.AddBankList();
    // this.CheckLogin();
    // this.ModifyData();
    // this.logout();
    // this.delete();
    // this.modifywidthdrawpass();
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
