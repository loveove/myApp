<template>
  <div>
    <v-container fluid class="red darken-4 pa-0">
      <v-layout wrap>
        <h4 class="custo_align pt-3 white--text">{{name}},欢迎您!</h4>
        <v-flex class="red darken-4 pt-3" xs12 style="height:100px">
          <img src="@/assets/xjj.png" class="customize_img pa-1">
        </v-flex>
        <v-flex class="pa-0 mx-4 d-flex" xs12 style="height:100px">
          <div class="white top-rounded">
            <v-layout xs-12 class="mx-3">
              <v-flex xs6 class="pt-5 pl-4">
                <div>
                  ￥
                  <span>{{mainBalance}}</span>
                </div>
                <div>账户余额(元)</div>
              </v-flex>
              <v-flex xs6 class="pt-5 pl-3">
                <div>
                  ￥
                  <!-- &nbsp; &nbsp; -->
                  <span>{{totalBalance ==1 ?(totalBalance - 1):(totalBalance)}}</span>
                </div>
                <div>
                  总资产(元)
                  <span class="ml-5" @click="toQueryBalance">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </div>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-flex class="pa-0 mx-4 d-flex" xs12 style="height:100px">
      <div class="white botton-rounded">
        <v-layout xs-12 class="pl-3 pt-3">
          <v-flex xs-6 class="pl-4">
            <div class="pl-3" @click="linkOverView">
              <i class="fas fa-yen-sign fa-lg" style="color:brown"></i>
            </div>
            <div>资产总览</div>
          </v-flex>
          <v-flex xs-6>
            <div class="pl-3" @click="linkWithdraw">
              <i class="fas fa-hand-holding-usd fa-lg" style="color:#76ff03;"></i>
            </div>
            <div>提款专区</div>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>
    <v-flex class="pt-5 mx-4 d-flex" xs12 style="height:400px">
      <div class="white border-rounded">
        <v-layout xs-12 class="pl-3 pt-3 mt-3">
          <v-flex xs-6 class="pl-4">
            <div class="pl-3" @click="linkDeposit">
              <i class="fas fa-donate fa-lg" style="color:#66bb6a;"></i>
            </div>
            <div>存款专区</div>
          </v-flex>
          <v-flex xs-6>
            <div class="pl-3" @click="linkPlatformTransfer">
              <i class="fas fa-exchange-alt fa-lg" style="color:#ffa726;"></i>
            </div>
            <div>平台互转</div>
          </v-flex>
        </v-layout>

        <v-layout xs-12 class="pl-3 pt-3 mt-3">
          <v-flex xs-6 class="pl-4">
            <div class="pl-3" @click="linkMyAgent">
              <i class="fas fa-users fa-lg" style="color:#00b0ff;"></i>
            </div>
            <div>我的代理</div>
          </v-flex>
          <v-flex xs-6>
            <div class="pl-3" @click="linkAutoRefresh">
              <i class="fas fa-sync fa-lg" style="color:#26a69a;"></i>
            </div>
            <div>自助洗码</div>
          </v-flex>
        </v-layout>

        <v-layout xs-12 class="pl-3 pt-3 mt-3">
          <v-flex xs-6 class="pl-4">
            <div class="pl-3" @click="linkUserInfo">
              <i class="fas fa-user-edit fa-lg" style="color:#ff6d00;"></i>
            </div>
            <div>个人资料</div>
          </v-flex>
          <v-flex xs-6>
            <div class="pl-3" @click="linkHistoryRecord">
              <i class="fas fa-history fa-lg" style="color:#5c6bc0;"></i>
            </div>
            <div>历史记录</div>
          </v-flex>
        </v-layout>

        <v-layout xs-12 class="pl-3 pt-3 mt-3">
          <v-flex sx6 class="pl-4">
            <div class="pl-3" @click="snackbar = true">
              <i class="fas fa-lock fa-lg" style="color:darkblue;"></i>
            </div>
            <div>忘记密码?</div>
            <v-snackbar v-model="snackbar" :top="y === 'top'" :timeout="timeout" color="info">
              {{ text }}
              <v-btn color="white" flat @click="snackbar = false">ok</v-btn>
            </v-snackbar>
          </v-flex>
          <v-flex xs-6>
            <Logout/>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>
  </div>
</template>
<script>
import axios from "axios";
import Logout from "../components/Logout.vue";
export default {
  name: "MemberCenter",
  data() {
    return {
      mainBalance: 0,
      y: "top",
      snackbar: false,
      timeout: 6000,
      text: "请联系在线客服",
      name: "",
      xjjBalance: 0,
      mgBalance: 0,
      njjBalance: 0
    };
  },
  components: {
    Logout
  },
  computed: {
    totalBalance() {
      let total;
      total =
        this.mainBalance + this.xjjBalance + this.njjBalance + this.mgBalance;
      if (total === 0) {
        return 1;
      } else {
        return total;
      }
    }
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
    linkOverView() {
      this.$router.push("/querybalance");
    },
    linkWithdraw() {
      this.$router.push("/withdrawarea");
    },
    linkPlatformTransfer() {
      this.$router.push("/platformtransfer");
    },
    linkDeposit() {
      this.$router.push("/depositarea");
    },
    linkUserInfo() {
      this.$router.push("/userinfo");
    },
    linkHistoryRecord() {
      this.$router.push("/historyrecord");
    },
    linkMyAgent() {
      this.$router.push("/myagent");
    },
    linkAutoRefresh() {
      this.$router.push("/autorefresh");
    },
    toQueryBalance() {
      this.$router.push("/querybalance");
    },

    getPlatformBalance(id) {
      this.isLoading = true;
      axios
        .get(
          `${
            this.$store.state.apiUrl
          }/account/getPlatformBalance?platformId=${id}`,
          // qs.stringify({
          //   platformId: id
          // }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false;
          // console.log(res.data);
          if (res.data.msg === "ok") {
            if (id === 0) {
              // console.log("main");
              this.mainBalance = res.data.result.balance;
            }
            if (id === 32) {
              // console.log("xjj");
              this.xjjBalance = res.data.result.balance;
            }
            if (id === 33) {
              // console.log("mg");
              this.mgBalance = res.data.result.balance;
            }
            if (id === 35) {
              // console.log("njj");
              this.njjBalance = res.data.result.balance;
            }
          } else {
            this.hasError = true;
            this.errorMessage = res.data.msg;
          }
        });
      // .catch(err => console.log(err));
    },
    refreshAllBalance() {
      this.timestampt = "";
      this.getPlatformBalance(0);
      this.getPlatformBalance(32);
      this.getPlatformBalance(33);
      this.getPlatformBalance(35);
      // let date = new Date();
      // this.timestampt += date.getFullYear();
      // this.timestampt += `/${date.getMonth()}`;
      // this.timestampt += `/${date.getDate()}`;
      // this.timestampt += ` ${date.getHours()}`;
      // this.timestampt += `:${date.getMinutes()}`;
      // this.timestampt += `:${date.getSeconds()}`;
    },
    getUserInfo() {
      axios
        .get(`${this.$store.state.apiUrl}/account/getUserInfo`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch("setUserInfo", res.data.result);
          this.name = res.data.result.username;
        });
      // .catch(err => console.log(err));
    }
  },
  created() {
    this.refreshAllBalance();
    this.getUserInfo();
  }
};
</script>

<style scope>
.top-rounded {
  border-radius: 15px 15px 0 0;
}
.botton-rounded {
  border-radius: 0 0 15px 15px;
}
.border-rounded {
  border-radius: 15px;
}
.customize_img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: brown;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.custo_align {
  /* width:0px; */
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
