<template>
  <div>
    <!-- <QueryBalance v-if="$route.params.page === 'querybalance'"/> -->
    <v-container fluid class="red darken-4 pa-0">
      <v-layout wrap>
        <v-flex class="red darken-4" xs12 style="height:100px">
          <img src="@/assets/xjj.png" class="customize_img mt-4 pa-1">
        </v-flex>
        <v-flex class="pa-0 mx-4 d-flex" xs12 style="height:100px">
          <div class="white top-rounded">
            <v-layout xs-12 class="mx-3">
              <v-flex xs6 class="pt-5 pl-2">
                <div>0.00</div>
                <div>账户余额(元)</div>
              </v-flex>
              <v-flex xs6 class="pt-5 pl-2">
                <div>&nbsp; &nbsp;</div>
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
        <!-- <hr> -->
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
        <!-- two -->
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
        <!-- three -->
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
        <!-- four -->
        <v-layout xs-12 class="pl-3 pt-3 mt-3">
          <v-flex sx6 class="pl-4">
            <!-- <div class="pl-3" @click="tosnackbar">
              <i class="fas fa-lock fa-lg" style="color:darkblue;"></i>
            </div>-->
            <!-- <div>忘记密码?</div> -->
            <div class="pl-3" @click="snackbar = true">
              <i class="fas fa-lock fa-lg" style="color:darkblue;"></i>
            </div>
            <div>忘记密码?</div>
            <v-snackbar v-model="snackbar" :top="y === 'top'">
              {{ text }}
              <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
            </v-snackbar>
          </v-flex>
          <v-flex xs-6 class="pl-3">
            <Logout/>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>
  </div>
</template>
<script>
import Logout from "../components/Logout.vue";
// import QueryBalance from '../components/QueryBalance.vue'
export default {
  name: "MemberCenter",
  data() {
    return {
      mainBalance: 0,
      y: "top",
      snackbar: false,
      timeout: 6000,
      text: "请联系在线客服"
    };
  },
  components: {
    Logout
    // QueryBalance
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
      // this.$store.dispatch("setUserInfoDefaultTab", 0);
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
    }

    // tosnackbar() {
    //   this.$emit("snackbar");
    // }
    // tosnackbar(){
    //   this.$router.push('/snackbar')

    // }
    // forgotpassword () {
    //   alert('请联系在线客服')
    // }
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
</style>
