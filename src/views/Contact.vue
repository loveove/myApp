<template>
  <v-layout row justify-center>
    <v-flex xs12>
      <v-card-text class="text-xs-center orange textsize">客服</v-card-text>
    </v-flex>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card class="blue lighten-5 radius">
        <v-layout row>
          <v-flex xs12 class="text-xs-center">
            <h2 class="pt-3">联系方式</h2>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-layout xs12 pt-3>
            <v-flex xs4 class="p-3 text-xs-center">
              <p>
                <!-- <v-icon>phone_in_talk</v-icon> -->
                <i class="fas fa-headphones phone"></i>
              </p>
              <p>
                <!-- <v-icon>mail_outline</v-icon> -->
                <i class="fab fa-qq qq"></i>
              </p>
              <p>
                <!-- <v-icon>mail_outline</v-icon> -->
                <i class="fab fa-qq qq"></i>
              </p>
              <p>
                <!-- <v-icon>mail_outline</v-icon> -->
                <i class="fab fa-qq qq"></i>
              </p>
              <p>
                <!-- <v-icon>mail_outline</v-icon> -->
                <i class="fab fa-weixin wechat"></i>
              </p>
            </v-flex>
            <v-flex xs8>
              <p class="pt-1 font">在线客服</p>
              <p class="pt-1 font">客服：6182255</p>
              <p class="pt-1 font">投诉：350955</p>
              <p class="pt-1 font">代理：771282239</p>
              <p class="pt-1 font">wnsr2453</p>
            </v-flex>
          </v-layout>
        </v-layout>
        <v-spacer></v-spacer>
        <!-- <v-btn class="red darken-4 p-4" flat @click="close" block round>返回首页</v-btn> -->
        <div class="text-xs-center">
          <v-btn class="red darken-4 white--text" @click="close" large round>返回首页</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog: true
    };
  },
  methods: {
    close() {
      this.$router.push("/");
      this.dialog = false;
    }
  }
};
</script>
<style scoped>
.qq {
  font-size: 22px;
}
.wechat {
  font-size: 22px;
}
.phone {
  font-size: 22px;
}
h2 {
  font-weight:bold;
}
.font {
  font-weight: bold;
}
.radius {
  border-radius: 5%;
}
.textsize{
  font-weight: bold;
}
</style>
