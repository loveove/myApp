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
                <div>&nbsp;&nbsp;</div>
                <div>
                  总资产(元)
                  <span class="ml-5">
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
            <div class="pl-3" @click="link_overview">
              <i class="fas fa-yen-sign custo-size1"></i>
            </div>
            <div>资产总览</div>
          </v-flex>
          <v-flex xs-6>
            <div class="pl-3" @click="link_withdraw">
              <i class="fas fa-hand-holding-usd custo-size2"></i>
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
            <div class="pl-3" @click="link_deposit">
              <i class="fas fa-donate custo-size3"></i>
            </div>
            <div>存款专区</div>
          </v-flex>
          <v-flex xs-6>
            <div class="pl-3" @click="link_platformtransfer">
              <i class="fas fa-exchange-alt custo-size4"></i>
            </div>
            <div>平台互转</div>
          </v-flex>
        </v-layout>
        <!-- two -->
        <v-layout xs-12 class="pl-3 pt-3 mt-3">
          <v-flex xs-6 class="pl-4">
            <div class="pl-3" @click="link_myagent">
              <i class="fas fa-users custo-size5"></i>
            </div>
            <div>我的代理</div>
          </v-flex>
          <v-flex xs-6>
            <div class="pl-3" @click="link_autorefresh">
              <i class="fas fa-sync custo-size6"></i>
            </div>
            <div>自助洗码</div>
          </v-flex>
        </v-layout>
        <!-- three -->
        <v-layout xs-12 class="pl-3 pt-3 mt-3">
          <v-flex xs-6 class="pl-4">
            <div class="pl-3" @click="link_userinfo">
              <i class="fas fa-user-edit custo-size7"></i>
            </div>
            <div>个人资料</div>
          </v-flex>
          <v-flex xs-6>
            <div class="pl-3" @click="link_historyrecord">
              <i class="fas fa-history custo-size8"></i>
            </div>
            <div>历史记录</div>
          </v-flex>
        </v-layout>
        <!-- four -->
        <v-layout xs-12 class="pl-3 pt-3 mt-3">
          <v-flex sx6 class="pl-4">
            <div class="pl-3">
              <i class="far fa-hand-point-right custo-size10"></i>
            </div>
            <div>代理加盟</div>
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
import QueryBalance from "../components/QueryBalance.vue";
export default {
  name: "MemberCenter",
  data() {
    return {};
  },
  components: {
    Logout,
    QueryBalance
  },
  methods: {
    link_overview() {
      this.$router.push("/querybalance");
    },
    link_withdraw() {
      this.$router.push("/withdrawarea");
    },
    link_platformtransfer() {
      this.$router.push("/platformtransfer");
    },
    link_deposit() {
      this.$router.push("/depositarea");
    },
    link_userinfo() {
      this.$store.dispatch("setUserInfoDefaultTab", 0);
      this.$router.push("/userinfo");
    },
    link_historyrecord() {
      this.$router.push("/historyrecord");
    },
    link_myagent() {
      this.$router.push("/myagent");
    },
    link_autorefresh() {
      this.$router.push("/autorefresh");
    }
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
.custo-size1 {
  font-size: 20px;
  color: brown;
}
.custo-size2 {
  font-size: 20px;
  color: #76ff03;
}
.custo-size3 {
  font-size: 20px;
  color: #66bb6a;
}
.custo-size4 {
  font-size: 20px;
  color: #ffa726;
}
.custo-size5 {
  font-size: 20px;
  color: #00b0ff;
}
.custo-size6 {
  font-size: 20px;
  color: #26a69a;
}
.custo-size7 {
  font-size: 20px;
  color: #ff6d00;
}
.custo-size8 {
  font-size: 20px;
  color: #5c6bc0;
}
.custo-size9 {
  font-size: 20px;
  color: brown;
}
.custo-size10 {
  font-size: 20px;
  color: darkblue;
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


