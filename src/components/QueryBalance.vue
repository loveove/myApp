<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay>
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
        </template>
        <v-card color="yellow darken-4">
          <v-toolbar dark color="yellow darken-4">
            <v-btn icon dark @click="link_membercenter">
              <i class="fas fa-arrow-left"></i>
            </v-btn>
            <v-toolbar-title>资产总览</v-toolbar-title>
          </v-toolbar>

          <v-card color class="mt-3 border_rounded">
            <v-layout xs12 row class="pt-3">
              <v-flex xs6>
                <h3 class="pl-2">我的资产</h3>
              </v-flex>
              <v-flex xs6>
                同步时间: 23/5/9999 12:30
                <v-btn color="red darken-4 white--text">刷新</v-btn>
              </v-flex>
            </v-layout>
            <v-layout xs12 row>
              <v-flex xs6>
                <v-card-text>
                  <span>￥</span>
                </v-card-text>
              </v-flex>
              <v-flex xs6>
                <v-card-text>
                  <i class="far fa-eye"></i>
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-layout xs12 row>
              <v-flex xs6>
                <v-card-text>账户余额</v-card-text>
              </v-flex>
              <v-flex xs6>
                <v-card-text>
                  <span>￥</span>

                  <span>***</span>
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-layout xs12 row>
              <v-flex xs6>
                <v-card-text>投注总额</v-card-text>
              </v-flex>
              <v-flex xs6></v-flex>
            </v-layout>
            <v-layout xs12 row>
              <v-flex xs6>
                <v-btn color="red darken-4 white--text">存款</v-btn>
              </v-flex>
              <v-flex xs6>
                <v-btn color="red darken-4 white--text">提款</v-btn>
              </v-flex>
            </v-layout>
          </v-card>

          <v-card class="mt-3 pb-3 border_rounded">
            <h3 class="pt-2 pl-2">资产分布</h3>
            <v-layout xs12 row class="pt-5">
              <v-flex xs3 class="d-flex">
                <v-progress-circular :rotate="360" :size="70" :width="6" color="primary">
                  主账户
                  <br>0.0%
                </v-progress-circular>
              </v-flex>
              <v-flex xs3 class="d-flex">
                <div>主账户</div>
                <div>0.00</div>
              </v-flex>
              <v-flex xs3 class="d-flex">
                <v-progress-circular :rotate="360" :size="70" :width="6" color="primary">
                  新锦江
                  <br>0.0%
                </v-progress-circular>
              </v-flex>
              <v-flex xs3 class="d-flex">
                <div>新锦江</div>
                <div>0.00</div>
              </v-flex>
            </v-layout>
            <v-layout xs12 row class="pt-5">
              <v-flex xs3 class="d-flex">
                <v-progress-circular :rotate="360" :size="70" :width="6" color="primary">
                  MG
                  <br>0.0%
                </v-progress-circular>
              </v-flex>
              <v-flex xs3 class="d-flex">
                <div>MG</div>
                <div>0.00</div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: "QueryBalance",
  components: {},

  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    link_membercenter() {
      this.$router.push("/membercenter");
    }
  }
};
</script>
<style scoped>
.border_rounded {
  margin: 10px;
}
</style>