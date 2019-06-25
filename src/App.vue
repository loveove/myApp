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
import { ApiCheckTokenMixin } from './mixins/ApiCheckTokenMixin'
import BottomNav from './components/BottomNav.vue'
import axios from 'axios'
const qs = require('qs')
export default {
  mixins: [ApiCheckTokenMixin],
  name: 'App',
  components: {
    BottomNav
  },
  data () {
    return {}
  },
  // computed: {
  //   isLogin: function() {
  //     if (this.$store.state.token != '') {
  //       return true;
  //     }
  //     if (this.$store.state.token == '') {
  //       return false;
  //     }
  //   }
  // },
  created () {
    //   if (this.$store.state.token != "") {
    //   this.checkToken();
    // }
    if (localStorage.getItem('token') != null) {
      this.$store.dispatch('setToken', localStorage.getItem('token'))
    }
  }
}
</script>
