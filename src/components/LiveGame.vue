<template>
  <div>
    <v-layout row>
      <v-flex xs12>
        <v-card-text class="text-xs-center fontsize orange">分类</v-card-text>
      </v-flex>
    </v-layout>

    <v-layout row class="pt-1" style="height:100vh">
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
          <v-layout>
            <v-flex xs6>
              <img src="@/assets/1.png" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">SW电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/1.png" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">PT电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/1.png" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">MG电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/1.png" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">HABA电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>

        <!-- two -->
        <v-layout row wrap v-if="current=='棋牌'">
          <v-layout>
            <v-flex xs6>
              <img src="@/assets/2.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">SW电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/2.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">PT电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/2.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">MG电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/2.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">HABA电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>

        <!-- three -->
        <v-layout row wrap v-if="current=='真人'">
          <v-layout>
            <v-flex xs6>
              <img src="@/assets/3.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">SW电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/3.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">PT电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/3.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">MG电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/3.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">HABA电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>
        <!-- four -->
        <v-layout row wrap v-if="current=='电竞'">
          <v-layout>
            <v-flex xs6>
              <img src="@/assets/4.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">SW电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/download.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">PT电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/4.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">MG电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs6>
              <img src="@/assets/4.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">HABA电子</span>
              <div class="text-xs-center">
                <v-btn round small color="red darken-4" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
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
      // 真人: true
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
.menucolor{
  background-color:#FF8F00
}
</style>


