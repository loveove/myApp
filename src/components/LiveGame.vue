<template>
  <div>
    <!-- <v-dialog v-model="dialog" fullscreen hide-overlay>
      <template v-slot:activator="{ on }"></template>
      <v-card color="yellow darken-4">
        <v-toolbar dark color="yellow darken-4">
          <v-btn icon dark @click.native="linkClassification">
            <i class="fas fa-arrow-left"></i>
          </v-btn>
          <v-toolbar-title>真人</v-toolbar-title>
    </v-toolbar>-->

    <!-- <div
          v-for="i in classification"
          :key="i.title"
          :class="{yellow:current==i.title, 'darken-4':current==i.title}"
          class="pa-3 text-xs-center ma-1 menucolor"
        >
          <span @click="current = i.title">{{i.title}}</span>
         
    </div>-->
    <!-- <v-layout row wrap v-if="current=='电竞'"> -->
    <!-- <v-container> -->
    <!-- <v-layout row wrap> -->
    <v-layout v-for="item in items" :key="item.TextName">
      <v-flex xs12>
        <img :src="item.image" height="100" width="120">
      </v-flex>
      <v-flex xs12>
        <div class="pt-1">
          <span class="white--text">{{item.gameTitle}}</span>
        </div>
        <div class="pt-2">
          <span class="blue-grey--text">{{item.gameText}}</span>
        </div>
        <!-- <div class="pt-2">
                  <span class="brown--text mt-5">{{item.gameDescription}}</span>
        </div>-->
        <!-- <v-btn
          round
          small
          color="orange"
          :href="urlXJJ"
          v-if="isLogin"
          target="_blank"
          :loading="isLoading"
          :disabled="isLoading"
        >开始游戏</v-btn> -->
        <!-- <Login v-if="!isLogin"> -->
          <v-btn color="red darken-4 white--text" round small>进路游戏</v-btn>
        <!-- </Login> -->
      </v-flex>
    </v-layout>
    <!-- </v-layout> -->
    <!-- </v-container> -->
    <!-- </v-layout> -->
    <!-- </v-card>
    </v-dialog>-->
  </div>
</template>

<script>

import axios from "axios";
const qs = require("qs");

export default {
  name: "LiveGame",
  components: {
  
  },
  data() {
    return {
      urlXJJ: "",
      urlNJJ: "",
      isLoading: false,
      //   dialog: true,
      items: [
        {
          image: require("../assets/livegame1.png"),
          gameTitle: "现场百家乐",
          gameText: "实体赌场 现场玩家"
        },
        {
          image: require("../assets/livegame2.jpg"),
          gameTitle: "极速百家乐",
          gameText: "专业游戏研发 提供最佳品质"
          //   gameDescription: "快速开牌，减少等待"
        },
        {
          image: require("../assets/livegame3.jpg"),
          gameTitle: "现场龙虎",
          gameText: "实体赌场 现场玩家"
          //   gameDescription: "老牌博彩平台，信誉第一"
        },
        {
          image: require("../assets/livegame4.jpg"),
          gameTitle: "极速龙虎",
          gameText: "极速玩法 趣味多多"
          //   gameDescription: "先发牌，后下注"
        }
      ]
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
        this.getGameUrl("XJJ");
      }
    }
  },
  methods: {
    linkClassification() {
      this.$emit("livegame");
    },
    getGameUrl(gamePlatformId, gameId = 0) {
      this.isLoading = true;
      axios
        .get(
          `${
            this.$store.state.apiUrl
          }/game/launchLottery?gamePlatformId=${gamePlatformId}&gameId=${gameId}`,
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          if (gamePlatformId === "XJJ") {
            this.urlXJJ = res.data.result.game_url;
            // console.log(res.data)
          }
          if (gamePlatformId === "NJJ") {
            this.urlNJJ = res.data.result.game_url;
            // console.log(res.data)
          }
          if (gamePlatformId === "MG") {
            // console.log(res.data);
          }
          this.isLoading = false;
        });
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    if (this.isLogin) {
      this.getGameUrl("XJJ");
    }
  }
};
</script>
<style scoped>
</style>

