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
          v-for="i in livegames"
          :key="i.title"
          :class="{yellow:current==i.title, 'darken-4':current==i.title}"
          class="pa-3 text-xs-center ma-1 menucolor"
        >
          <span @click="current = i.title">{{i.title}}</span>
        </div>
      </v-flex>

      <v-flex xs9>
        <!-- one -->
        <v-layout row wrap v-if="current=='电子'">
          <v-layout v-for="item in electronic" :key="item.gameName">
            <v-flex xs6>
              <img :src="item.image" height="80" width="120">
            </v-flex>
            <v-flex xs6>
              <span class="white--text pl-3">{{item.gameName}}</span>
              <v-btn round small color="red darken-4 mt-4" dark>开始游戏</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
        <!-- two -->
        <v-layout row wrap v-if="current=='棋牌'">
          <v-layout v-for="item in chess" :key="item.gameName">
            <v-flex xs6>
              <img :src="item.image" height="80" width="120">
            </v-flex>
            <v-flex xs6>
              <span class="white--text pl-3">{{item.gameName}}</span>
              <v-btn round small color="red darken-4 mt-4" dark>开始游戏</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
        <!-- three -->
           <v-layout row wrap v-if="current=='真人'">
          <v-layout v-for="item in casino" :key="item.gameName">
            <v-flex xs6>
              <img :src="item.image" height="80" width="120">
            </v-flex>
            <v-flex xs6>
              <span class="white--text pl-3">{{item.gameName}}</span>
              <v-btn round small color="red darken-4 mt-4" dark>开始游戏</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
        <!-- four -->
           <v-layout row wrap v-if="current=='电竞'">
          <v-layout v-for="item in game" :key="item.gameName">
            <v-flex xs6>
              <img :src="item.image" height="80" width="120">
            </v-flex>
            <v-flex xs6>
              <span class="white--text pl-3">{{item.gameName}}</span>
              <v-btn round small color="red darken-4 mt-4" dark>开始游戏</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
        <!-- five -->
           <v-layout row wrap v-if="current=='体育'">
          <v-layout v-for="item in sport" :key="item.gameName">
            <v-flex xs6>
              <img :src="item.image" height="80" width="120">
            </v-flex>
            <v-flex xs6>
              <span class="white--text pl-3">{{item.gameName}}</span>
              <v-btn round small color="red darken-4 mt-4" dark>开始游戏</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // color: "blue lighten-3",
      menu: "recent",
      livegames: [
        { title: "电子" },
        { title: "棋牌" },
        { title: "真人" },
        { title: "电竞" },
        { title: "体育" },
        { title: "彩票" },
        { title: "红包" },
        { title: "优惠" },
        { title: "关于" }
      ],
      current: "电子",
      electronic: [
        { image: require("../assets/3.jpg"), gameName: "HABA电子" },
        { image: require("../assets/3.jpg"), gameName: "MG电子" },
        { image: require("../assets/3.jpg"), gameName: "PT电子" },
        { image: require("../assets/3.jpg"), gameName: "SW电子" }
      ],
      chess: [
        { image: require("../assets/4.jpg"), gameName: "HABA电子" },
        { image: require("../assets/4.jpg"), gameName: "MG电子" },
        { image: require("../assets/4.jpg"), gameName: "PT电子" },
        { image: require("../assets/4.jpg"), gameName: "SW电子" }
      ],
       casino: [
        { image: require("../assets/5.jpg"), gameName: "HABA电子" },
        { image: require("../assets/5.jpg"), gameName: "MG电子" },
        { image: require("../assets/5.jpg"), gameName: "PT电子" },
        { image: require("../assets/5.jpg"), gameName: "SW电子" }
      ],
       game: [
        { image: require("../assets/2.jpg"), gameName: "HABA电子" },
        { image: require("../assets/2.jpg"), gameName: "MG电子" },
        { image: require("../assets/2.jpg"), gameName: "PT电子" },
        { image: require("../assets/2.jpg"), gameName: "SW电子" }
      ],
      sport: [
        { image: require("../assets/1.png"), gameName: "HABA电子" },
        { image: require("../assets/1.png"), gameName: "MG电子" },
        { image: require("../assets/1.png"), gameName: "PT电子" },
        { image: require("../assets/1.png"), gameName: "SW电子" }
      ]
    };
  },
  methods: {}
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


