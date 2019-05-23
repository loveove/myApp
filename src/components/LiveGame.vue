<template>
  <div>
    <v-layout row>
      <v-flex xs12>
        <v-card-text class="text-xs-center fontsize orange">分类</v-card-text>
      </v-flex>
    </v-layout>
    
    <v-layout row>
      <v-flex xs3>
        <v-btn color="teal" @click="displayElectronic">
          <span>电子</span>
        </v-btn>
        <v-btn color="teal" @click="displayChess">
          <span>棋牌</span>
        </v-btn>

        <v-btn color="teal">
          <span>真人</span>
        </v-btn>
        <v-btn color="teal">
          <span>电竞</span>
        </v-btn>
        <v-btn color="teal">
          <span>体育</span>
        </v-btn>
        <v-btn color="teal">
          <span>彩票</span>
        </v-btn>
        <v-btn color="teal">
          <span>红包</span>
        </v-btn>
        <v-btn color="teal">
          <span>优惠</span>
        </v-btn>
        <v-btn color="teal">
          <span>关于</span>
        </v-btn>
      </v-flex>
      <v-flex xs9>
        <!-- one -->
        <v-layout row wrap v-show="showElectronic">
          <v-layout>
            <v-flex xs6>
              <img src="@/assets/1.png" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">SW电子</span>
              <div class="text-xs-center">
                <v-btn round small color="primary" dark class="mr-5 mt-4">开始游戏</v-btn>
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
                <v-btn round small color="primary" dark class="mr-5 mt-4">开始游戏</v-btn>
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
                <v-btn round small color="primary" dark class="mr-5 mt-4">开始游戏</v-btn>
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
                <v-btn round small color="primary" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>

        <!-- two -->
        <v-layout row wrap v-show="showChess">
          <v-layout>
            <v-flex xs6>
              <img src="@/assets/2.jpg" height="80" width="120" class="pl-3">
            </v-flex>
            <v-flex xs6>
              <span class="ml-3 white--text">SW电子</span>
              <div class="text-xs-center">
                <v-btn round small color="primary" dark class="mr-5 mt-4">开始游戏</v-btn>
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
                <v-btn round small color="primary" dark class="mr-5 mt-4">开始游戏</v-btn>
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
                <v-btn round small color="primary" dark class="mr-5 mt-4">开始游戏</v-btn>
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
                <v-btn round small color="primary" dark class="mr-5 mt-4">开始游戏</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>
        
        <!-- three -->
        
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: "recent",
      showElectronic:false,
      showChess: false,
      showCasino: false,
      showGame: false
    };
  },
  methods: {
    displayElectronic: function() {
      this.showElectronic = true;
      this.showChess = false;
      this.showCasino = false;
      this.showGame = false;
    },
    displayChess: function() {
      this.showElectronic = false;
      this.showChess = true;
      this.showCasino = false;
      this.showGame = false;
    },
    displayCasino: function() {
      this.showElectronic = false;
      this.showChess = false;
      this.showCasino = true;
      this.showGame = false;
    },
    displayGame: function() {
      this.showElectronic = false;
      this.showChess = false;
      this.showCasino = false;
      this.showGame = true;
    }
  }
};
</script>
<style scoped>
.fontsize{
  font-weight: bold;
}
</style>


