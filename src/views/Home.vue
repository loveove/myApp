<template>
  <div>
    <HeaderComponent/>
    <v-carousel hide-controls hide-delimiters height="200">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-card class="red darken-4">
      <marquee
        class="white--text"
      >1,尊敬的客户：您好，大额支付建议您使用银行卡入款，笔笔可享最高1.5%优惠！详情可咨询在线客服哦.2,特别通告：【电子】【棋牌】【捕鱼】全新返水升级，全网最劲爆的游戏平台尽在澳门威尼斯人。</marquee>
    </v-card>
    <v-card class="orange mt-3">
      <v-layout row wrap>
        <v-layout xs12 class="pt-4">
          <v-flex xs10>
            <span class="px-4">平台推荐</span>
            <span>精彩荟萃,激情无限</span>
          </v-flex>
          <v-flex xs2>
            <span @click="linkClassification">更多</span>
            <i class="fas fa-chevron-right"></i>
          </v-flex>
        </v-layout>
        <v-layout xs12 class="pt-4">
          <v-flex xs3>
            <v-btn fab dark color="cyan">
              <v-icon dark>android</v-icon>
            </v-btn>
            <p class="pl-3 pb-3">Game</p>
          </v-flex>
          <v-flex xs3>
            <v-btn fab dark color="purple">
              <v-icon dark>android</v-icon>
            </v-btn>
            <p class="pl-3 pb-3">Game</p>
          </v-flex>
          <v-flex xs3>
            <v-btn fab dark color="orange">
              <v-icon dark>android</v-icon>
            </v-btn>
            <p class="pl-3 pb-3">Game</p>
          </v-flex>
          <v-flex xs3>
            <v-btn fab dark color="black">
              <v-icon dark>android</v-icon>
            </v-btn>
            <p class="pl-3 pb-3">Game</p>
          </v-flex>
        </v-layout>
        <v-layout xs12 class="pt-4">
          <v-flex xs3>
            <v-btn fab dark color="cyan">
              <v-icon dark>android</v-icon>
            </v-btn>
            <p class="pl-3 pb-3">Game</p>
          </v-flex>
          <v-flex xs3>
            <v-btn fab dark color="purple">
              <v-icon dark>android</v-icon>
            </v-btn>
            <p class="pl-3 pb-3">Game</p>
          </v-flex>
          <v-flex xs3>
            <v-btn fab dark color="orange">
              <v-icon dark>android</v-icon>
            </v-btn>
            <p class="pl-3 pb-3">Game</p>
          </v-flex>
          <v-flex xs3>
            <v-btn fab dark color="black">
              <v-icon dark>android</v-icon>
            </v-btn>
            <p class="pl-3 pb-3">Game</p>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-card>
    <v-card class="orange mt-3 mb-3">
      <v-layout row wrap>
        <v-layout xs12 class="pt-4">
          <v-flex xs10>
            <span class="px-4">精选大促</span>
            <span>各种优惠为您撑腰</span>
          </v-flex>
          <v-flex xs2>
            <span @click="linkClassification">更多</span>
            <i class="fas fa-chevron-right"></i>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout xs12 class="pt-4">
        <v-flex xs6>
          <img src="@/assets/download.jpg" height="200" width="200" class="px-2">
        </v-flex>
        <v-flex xs6>
          <v-layout xs12>
            <img src="@/assets/1.png" height="100" width="180" class="px-2">
          </v-layout>
          <v-layout xs12>
            <img src="@/assets/3.jpg" height="100" width="180" class="px-2">
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "Home",
  components: {
    HeaderComponent
  },
  data() {
    return {
      page: 1,
      items: [
        {
          src: "https://line.xwiht.cn/QUC/imgs/1558436265047捕鱼1.jpg"
        },
        {
          src: "https://line.xwiht.cn/QUC/imgs/1558440285885daixm.jpg"
        },
        {
          src: "https://line.xwiht.cn/QUC/imgs/1552732533284首页2453.png"
        },
        {
          src: "https://line.xwiht.cn/QUC/imgs/1558440285885daixm.jpg"
        },
        {
          src: "https://line.xwiht.cn/QUC/imgs/1558432826800末端.jpg"
        },
        {
          src: "https://line.xwiht.cn/QUC/imgs/15584354210091234.jpg"
        },
        {
          src: "https://line.xwiht.cn/QUC/imgs/1558437245325猴子.jpg"
        }
      ]
    };
  },
  methods: {
    linkClassification() {
      this.$router.push("/classification");
      this.dialog = false;
    }
    // linktodiscount() {
    //   this.$router.push("/discount");
    //   this.dialog = false;
    // }
  }
  // mounted() {
  //   if (localStorage.getItem("token") != null) {
  //     if (localStorage.getItem("token").length > 10) {
  //       this.$store.dispatch("setToken", localStorage.getItem("token"));
  //       //check login status api should be applied here
  //       apiMethods.checkToken();
  //       console.log(token)
  //     }
  //   }
  // }
};
</script>

