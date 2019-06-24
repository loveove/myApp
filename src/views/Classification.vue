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
          <span
            @click="current=i.title"
            class="brown--text"
            v-if="i.title!='电子' & i.title!='优惠'"
          >{{i.title}}</span>
          <span
            @click="toLink(i.title)"
            class="brown--text"
            v-if="i.title=='电子' | i.title== '优惠'"
          >{{i.title}}</span>
        </div>
      </v-flex>
      <v-flex xs9>
        <v-layout row wrap v-if="current=='真人'">
          <LiveGame/>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";

import axios from "axios";
import Discount from "../components/Discount.vue";
import Game from "../components/Game.vue";
import LiveGame from "../components/LiveGame.vue";
const qs = require("qs");
export default {
  mixins: [ApiCheckTokenMixin],

  name: "Classification",
  components: {
    Discount,
    Game,
    LiveGame
  },
  data() {
    return {
      menu: "recent",
      current: "真人",
      items: [
        { title: "真人" },
        { title: "电子" },
        { title: "优惠" },
        { title: "红包" },
        { title: "关于" },
        { title: "合约条款 " },
        { title: "博彩责任 " },
        { title: "百家乐规则" },
        { title: "龙虎规则" },
        { title: "博彩牌照 " }
      ]
    };
  },
  methods: {
    toLink(title) {
      if (title == "电子") {
        this.$router.push("/games/1");
      }
      if (title == "优惠") this.$router.push("/discount");
    }
  },
  created() {
    if (this.$store.state.token != "") this.checkToken();
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
