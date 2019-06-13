<template>
  <div>
    <v-layout row>
      <v-flex xs12>
        <v-card-text class="text-xs-center fontsize orange">分类</v-card-text>
      </v-flex>
    </v-layout>

    <v-layout row class="pt-1" style="height:100%">
      <v-flex xs3>
        <div
          v-for="i in items"
          :key="i.title"
          :class="{yellow:current==i.title, 'darken-4':current==i.title}"
          class="pa-3 text-xs-center ma-1 menucolor"
        >
          <span @click="current=i.title">{{i.title}}</span>
          <!-- <span @click="current = i.title">{{i.title}}</span> -->
        </div>
      </v-flex>
      <v-flex xs9>
        <!-- one -->
        <!-- <v-layout row wrap>
          <v-layout v-for="item in classification" :key="item.content">
            <v-flex xs6>
              <img :src="item.image" height="80" width="120">
            </v-flex>
            <v-flex xs6>
              <span class="white--text pl-3">{{item.gameName}}</span>
              <v-btn round small color="red darken-4 mt-4" dark>开始游戏</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>-->
        <v-layout row wrap v-if="current=='电子'">
          <Game @game="linkGame"></Game>
        </v-layout>
        <!-- six -->
        <v-layout row wrap v-if="current=='优惠'">
          <Discount @discount="linkDiscount"></Discount>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import axios from "axios";
const qs = require("qs");
import Discount from "../components/Discount.vue";
// import GamePlayTransferDialog from "../components/GamePlayTransferDialog.vue";
import Game from "../components/Game.vue";
export default {
  name: "Classification",
  components: {
    Discount,
    // GamePlayTransferDialog,
    Game
  },
  data() {
    return {
      // active: null,
      menu: "recent",
      current: "真人",
      // electronic: [{ image: require("../assets/3.jpg"), content: "Game" }]
      items: [
        { title: "电子" },
        { title: "棋牌" },
        { title: "真人" },
        { title: "电竞" },
        { title: "体育" },
        { title: "彩票" },
        { title: "红包" },
        { title: "优惠" },
        { title: "关于" }
      ]
    };
  },
  methods: {
    linkDiscount() {
      this.current = "真人";
    },
    linkGame() {
      this.current = "真人";
    }
  }

};
</script>
<style scoped>
.fontsize {
  font-weight: bold;
}
.margin {
  padding-top: 10px;
}
.menucolor {
  background-color: #ff8f00;
}
</style>


