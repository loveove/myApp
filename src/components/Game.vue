<template>
  <div>
    <!-- <v-layout row justify-center> -->
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <template v-slot:activator="{ on }">
        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
      </template>
      <v-card color="yellow darken-4">
        <v-toolbar dark color="yellow darken-4">
          <v-btn icon dark @click.native="linkClassification">
            <i class="fas fa-arrow-left"></i>
          </v-btn>
          <v-toolbar-title>电子</v-toolbar-title>
        </v-toolbar>
        <!-- pagination -->
        <div class="text-xs-center">
          <v-pagination v-model="page" :length="10" circle @input="paging(page)"></v-pagination>
        </div>
        <!-- api content -->
        <v-container style="height: 100%">
          <v-layout row wrap justify-space-around>
            <v-flex v-for="game in games" :key="game.id" xs5>
              <v-img :src="game.img_path" height="150" contain class="grey darken-4 my-1"></v-img>
              <!-- <login v-if="$store.state.token==null"> -->
              <v-btn
                block
                color="orange accent-4 white--text"
                @click.native="goToGame(game.url)"
                v-if="$store.state.token!=null"
              >进路游戏</v-btn>
              <v-btn
                block
                color="red accent-4 white--text"
                @click.native="linkLogin"
                v-if="$store.state.token==null"
              >进路游戏</v-btn>

              <!-- </login> -->

              <!-- <Login v-if="!isLogin" class="d-flex">
                <v-btn block color="grey">进</v-btn>
              </Login>-->
            </v-flex>
          </v-layout>
        </v-container>
        <!-- <v-layout row justify-center>
          <v-dialog v-model="showDialog" max-width="290">
            <v-btn loading class="henry-ml" flat></v-btn>
          </v-dialog>
        </v-layout>-->
      </v-card>
    </v-dialog>
    <!-- </v-layout> -->
  </div>
</template>

<script>
// import Login from '../views/Login.vue'

import axios from 'axios'
const qs = require('qs')
export default {
  name: 'Game',
  components: {
    // Login
    // TokenExpiredDialog
  },
  data () {
    return {
      // page: 1,
      games: [],
      page: Number(this.$route.params.page),
      dialog: true
    }
  },
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin
    }
  },
  watch: {
    isLogin: function (toGet) {
      if (toGet) {
        this.getGames(this.$route.params.page)
      }
    }
  },

  methods: {
    paging (page) {
      this.$router.push({
        name: 'games',
        params: { page: page }
      })
      this.getGames(page)
    },
    linkClassification () {
      this.$router.push('/classification')
    },
    linkLogin () {
      this.$router.push('/login')
    },
    getGames (page) {
      this.showDialog = true
      axios
        .post(
          `${this.$store.state.apiGameUrl}/game/getList`,
          qs.stringify({
            cid: 'all',
            page: page
          }),
          {
            headers: {
              'X-Auth-Token': this.$store.state.token
            }
          }
        )
        .then(res => {
          // console.log(res);
          this.games = res.data.result.list
        })
      // .catch(err => console.log(err));
    },
    getGameUrl (games) {
      this.showDialog = true
      games.forEach((game, index) => {
        axios
          .get(
            `${
              this.$store.state.apiUrl
            }/game/launchLottery?gamePlatformId='MG'&gameId=${game.id}`,
            {
              headers: {
                'X-Auth-Token': this.$store.state.token
              }
            }
          )
          .then(res => {
            this.games[index].url = res.data.result.game_url
            // this.showDialog = false;
            if (this.$store.state.isLogin) {
              this.getGameUrl(this.games)
            }
          })
        // .catch(err => console.log(err));
      })
    },
    goToGame (url) {
      window.open(url)
    }
  },
  mounted () {
    this.getGames(this.$route.params.page)
    if (localStorage.getItem('token') != null) {
      if (localStorage.getItem('token').length > 10) {
        this.$store.dispatch('setToken', localStorage.getItem('token'))
        // check login status api should be applied here
        // apiMethods.checkToken();
      }
    }
  }
}
</script>
<style scoped>
</style>
