<template>
  <div>
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
              <v-btn
                block
                color="orange accent-4 white--text"
                @click.native="goToGame(game.url)"
                v-if="$store.state.token!=''"
              >进路游戏</v-btn>
              <v-btn
                block
                color="red accent-4 white--text"
                @click.native="linkLogin"
                v-if="$store.state.token===''"
              >进路游戏</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";
import axios from "axios";
const qs = require("qs");
export default {
  mixins: [ApiCheckTokenMixin],
  name: "Game",
  components: {},
  data() {
    return {
      // page: 1,
      games: [],
      page: Number(this.$route.params.page),
      dialog: true
    };
  },
  computed: {
    isLogin: function() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    isLogin: function(toGet) {
      if (toGet) {
        this.getGames(this.$route.params.page);
      }
    }
  },

  methods: {
    paging(page) {
      this.$router.push({
        name: "games",
        params: { page: page }
      });
      this.getGames(page);
    },
    linkClassification() {
      this.$router.push("/classification");
    },
    linkLogin() {
      this.$router.push("/login");
    },
    getGames(page) {
      this.showDialog = true;
      axios
        .post(
          `${this.$store.state.apiGameUrl}/game/getList`,
          qs.stringify({
            cid: "all",
            page: page
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          this.games = res.data.result.list;
        });
    },
    getGameUrl(games) {
      this.showDialog = true;
      games.forEach((game, index) => {
        axios
          .get(
            `${
              this.$store.state.apiUrl
            }/game/launchLottery?gamePlatformId='MG'&gameId=${game.id}`,
            {
              headers: {
                "X-Auth-Token": this.$store.state.token
              }
            }
          )
          .then(res => {
            this.games[index].url = res.data.result.game_url;
            if (this.$store.state.isLogin) {
              this.getGameUrl(this.games);
            }
          });
      });
    },
    goToGame(url) {
      window.open(url);
    }
  },
  mounted() {
    this.getGames(this.$route.params.page);
    if (localStorage.getItem("token") != null) {
      this.checkToken();
      if (localStorage.getItem("token").length > 10) {
        this.$store.dispatch("setToken", localStorage.getItem("token"));
      }
    }
  }
};
</script>
<style scoped>
</style>
