<template>
  <v-container fluid>
    <v-card class="mb-1">
      <v-layout row>
        <v-flex xs6 order-lg2>
          <h3>我的资产</h3>
        </v-flex>
        <v-flex xs6>
          <v-card-text>
            {{timestampt}}
            <v-btn
              color="warning"
              @click="refreshAllBalance"
              :loading="isLoading"
              :disabled="isLoading"
            >刷新</v-btn>
          </v-card-text>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6 order-lg2>
          <v-card-text>
            <span>￥</span>
            <!-- <span v-if="showBalance">{{totalBalance ==1 ?(totalBalance - 1):(totalBalance)}}</span>
            <span v-if="!showBalance">***</span> -->
          </v-card-text>
        </v-flex>
        <v-flex xs6>
          <v-card-text>
            <v-icon @click="showBalance =!showBalance">{{icon}}</v-icon>
          </v-card-text>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6 order-lg2>
          <v-card-text>账户余额</v-card-text>
        </v-flex>
        <v-flex xs6>
          <v-card-text>
            <span>￥</span>
            <span v-if="showBalance">{{mainBalance}}</span>
            <span v-if="!showBalance">***</span>
          </v-card-text>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6 order-lg2>
          <v-card-text>投注总额</v-card-text>
        </v-flex>
        <v-flex xs6>
          <v-card-text>{{$store.state.userInfo.total_bet}}</v-card-text>
        </v-flex>
      </v-layout>
      <v-layout pb-4 row>
        <v-flex xs6 order-lg2>
          <v-btn color="warning" @click.native="bb">存款</v-btn>
        </v-flex>
        <v-flex xs6>
          <v-btn color="warning" @click.native="aa">提款</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
    <v-divider></v-divider>

    <v-layout row>
      <v-flex xs6>
        <v-card class="pt-3">
          <v-flex xs12 class="text-xs-center">
            <span v-if="showBalance">主账户 ￥{{mainBalance}}</span>
            <span v-if="!showBalance">主账户 ￥***</span>
          </v-flex>
          <v-flex xs12 class="d-flex">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="mainAccountPercentage"
              color="primary"
            >{{mainAccountPercentage}}%</v-progress-circular>
          </v-flex>
          <v-card-actions>&nbsp;</v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card class="pt-3">
          <v-flex xs12 class="text-xs-center">
            <span v-if="showBalance">新锦江 ￥{{xjjBalance}}</span>
            <span v-if="!showBalance">新锦江 ￥***</span>
          </v-flex>
          <v-flex xs12 class="d-flex">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="xjjPercentage"
              color="primary"
            >{{xjjPercentage}}%</v-progress-circular>
          </v-flex>
          <v-card-actions>&nbsp;</v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6>
        <v-card class="pt-3">
          <v-flex xs12 class="text-xs-center">
            <span v-if="showBalance">MG ￥{{mgBalance}}</span>
            <span v-if="!showBalance">MG ￥***</span>
          </v-flex>
          <v-flex xs12 class="d-flex">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="mgPercentage"
              color="primary"
            >{{mgPercentage}}%</v-progress-circular>
          </v-flex>
          <v-card-actions>&nbsp;</v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card class="pt-3">
          <v-flex xs12 class="text-xs-center">
            <span v-if="showBalance">新锦江(新版) ￥{{njjBalance}}</span>
            <span v-if="!showBalance">新锦江(新版) ￥***</span>
          </v-flex>
          <v-flex xs12 class="d-flex">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="njjPercentage"
              color="primary"
            >{{njjPercentage}}%</v-progress-circular>
          </v-flex>
          <v-card-actions>&nbsp;</v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-flex xs12>
      <v-alert
        v-model="hasError"
        :value="true"
        color="error"
        icon="warning"
        outline
        dismissible
        error
      >{{errorMessage}}</v-alert>
    </v-flex>
  </v-container>
</template>
<script>
import axios from "axios";
// const qs = require("qs");

export default {
  name: "QueryBalance",
  components: {},
  data: () => ({
    // errorMessage: "",
    // hasError: false,
    // showBalance: true,
    // mainBalance: 0,
    // timestampt: "",
    // isLoading: false,
    // xjjBalance: 0,
    // mgBalance: 0,
    // njjBalance: 0
  }),
  computed: {
    icon: function() {
      return this.showBalance ? "visibility" : "visibility_off";
    },
    // totalBalance() {
    //   let total;
    //   total =
    //     this.mainBalance + this.xjjBalance + this.njjBalance + this.mgBalance;
    //   if (total === 0) {
    //     return 1;
    //   } else {
    //     return total;
    //   }
    // },
    // mainAccountPercentage() {
    //   let percentage;
    //   percentage = (this.mainBalance / this.totalBalance) * 100;
    //   return Math.round(percentage);
    // },
    // xjjPercentage() {
    //   let percentage = (this.xjjBalance / this.totalBalance) * 100;
    //   return Math.round(percentage);
    // },
    // mgPercentage() {
    //   let percentage = (this.mgBalance / this.totalBalance) * 100;
    //   return Math.round(percentage);
    // },
    // njjPercentage() {
    //   let percentage = (this.njjBalance / this.totalBalance) * 100;
    //   return Math.round(percentage);
    // }
  },
  methods: {
    // getPlatformBalance(id) {
    //   this.isLoading = true;
    //   axios
    //     .get(
    //       `${this.$store.state.apiUrl}/account/getPlatformBalance?platformId=${id}`,
    //       // qs.stringify({
    //       //   platformId: id
    //       // }),
    //       {
    //         headers: {
    //           "X-Auth-Token": this.$store.state.token
    //         }
    //       }
    //     )
    //     .then(res => {
    //       this.isLoading = false;
    //       // console.log(res.data);
    //       if (res.data.msg === "ok") {
    //         if (id === 0) {
    //           // console.log("main");
    //           this.mainBalance = res.data.result.balance;
    //         }
    //         if (id === 32) {
    //           // console.log("xjj");
    //           this.xjjBalance = res.data.result.balance;
    //         }
    //         if (id === 33) {
    //           // console.log("mg");
    //           this.mgBalance = res.data.result.balance;
    //         }
    //         if (id === 35) {
    //           // console.log("njj");
    //           this.njjBalance = res.data.result.balance;
    //         }
    //       } else {
    //         this.hasError = true;
    //         this.errorMessage = res.data.msg;
    //       }
    //     })
    //     // .catch(err => console.log(err));
    // },
    // linkDepositeArea() {
    //   this.$router.push("deposite_area");
    // },
    // linkWithdrawArea() {
    //   this.$router.push("withdraw_area");
    // },
    // refreshAllBalance() {
    //   this.timestampt = "";
    //   this.getPlatformBalance(0);
    //   this.getPlatformBalance(32);
    //   this.getPlatformBalance(33);
    //   this.getPlatformBalance(35);
    //   let date = new Date();
    //   this.timestampt += date.getFullYear();
    //   this.timestampt += `/${date.getMonth()}`;
    //   this.timestampt += `/${date.getDate()}`;
    //   this.timestampt += ` ${date.getHours()}`;
    //   this.timestampt += `:${date.getMinutes()}`;
    //   this.timestampt += `:${date.getSeconds()}`;
    // }
  },
  created() {
    // this.refreshAllBalance();
  }
};
</script>
    
    