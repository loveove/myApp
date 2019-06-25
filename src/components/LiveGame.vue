<template>
  <div>
    <v-layout v-for="item in items" :key="item.TextName">
      <v-flex xs12>
        <img :src="item.image" height="100" width="120">
      </v-flex>
      <v-flex xs12>
        <div class="pl-3">
          <span class="white--text">{{item.gameTitle}}</span>
        </div>
        <div class="pt-2">
          <span class="blue-grey--text">{{item.gameText}}</span>
        </div>
        <v-btn
          color="orange accent-4 white--text"
          @click="gamePlayTransfer"
          round
          small
          v-if="$store.state.token!=''"
        >进路游戏</v-btn>
        <v-btn
          color="red darken-4 white--text"
          @click.native="linkLogin"
          round
          small
          v-if="$store.state.token==''"
        >进路游戏</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
const qs = require('qs')

export default {
  name: 'LiveGame',
  components: {},
  data () {
    return {
      items: [
        {
          image: require('../assets/livegame1.png'),
          gameTitle: '现场百家乐',
          gameText: '实体赌场 现场玩家'
        },
        {
          image: require('../assets/livegame2.jpg'),
          gameTitle: '极速百家乐',
          gameText: '专业游戏研发 提供最佳品质'
          //   gameDescription: "快速开牌，减少等待"
        },
        {
          image: require('../assets/livegame3.jpg'),
          gameTitle: '现场龙虎',
          gameText: '实体赌场 现场玩家'
          //   gameDescription: "老牌博彩平台，信誉第一"
        },
        {
          image: require('../assets/livegame4.jpg'),
          gameTitle: '极速龙虎',
          gameText: '极速玩法 趣味多多'
          //   gameDescription: "先发牌，后下注"
        }
      ]
    }
  },
  methods: {
    gamePlayTransfer () {
      this.$router.push('/gameplaytransferdialog')
    },
    linkLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
</style>
