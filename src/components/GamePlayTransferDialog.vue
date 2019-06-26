<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-layout xs12 row wrap>
        <v-flex xs10>
          <v-card-title>
            <span class="white--text">额度转换</span>
          </v-card-title>
        </v-flex>
        <v-flex xs2>
          <v-btn icon dark @click="toClassification" class="context-center">
            <v-icon>close</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-card>
        <v-card-text>
          <v-flex xs12>
            <span class="green--text" @click="toDeposit">先去存款</span>
          </v-flex>
          <v-form ref="form" v-model="valid" class="px-4">
            <v-flex>
              <v-select
                v-model="outgoing"
                prepend-icon="account_circle"
                :items="outgoingItems"
                label="转出"
                required
              ></v-select>
            </v-flex>
            <v-flex>
              <v-select
                v-model="incoming"
                prepend-icon="account_circle"
                :items="incomingItems"
                label="转入"
                required
              ></v-select>
            </v-flex>

            <v-text-field
              v-model="amount"
              prepend-icon="fas fa-coins"
              :rules="amountRules"
              label="金额 "
              type="number"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-layout xs12 row wrap class="pb-3">
          <v-flex xs6 class="pl-5">
            <v-btn color="red darken-4 white--text" small @click.native="transferBalance">确定转账</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn
              tag="a"
              :href="urlXJJ"
              small
              color="red darken-4 white--text"
              target="_blank"
            >直接游戏</v-btn>
          </v-flex>

          <v-alert
            v-model="hasAlert"
            :value="true"
            type="info"
            icon="warning"
            outline
            dismissible
          >{{alertMessage}}</v-alert>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { apiMethods } from "@/main";
import axios from "axios";
const qs = require("qs");
export default {
  name: "GamePlayTransferDialog",
  data: () => ({
    alertMessage: "",
    hasAlert: false,
    dialog: true,
    notifications: false,
    sound: true,
    widgets: false,
    outgoingItems: [],
    incomingItems: [],
    isLoading: false,
    valid: false,
    amount: "",
    amountRules: [v => !!v || "amount is required"],
    // amountRules: [v => v <= 0 || "转账金额不能大于0"],
    // amountRules: [
    //   v => !!v || "请加入金额",
    //   v => (v => v <= 0) || "转账金额不能大于0"
    // ],
    outgoing: "",
    incoming: "",
    urlXJJ: "",
    urlNJJ: ""
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    },
    isLogin: function() {
      return this.$store.state.isLogin;
    },
    outgoingId() {
      switch (this.outgoing) {
        case this.outgoingItems[0]:
          return 0;
        case this.outgoingItems[1]:
          // return Number(this.$store.state.config.plats[0].id);
          return 35;
        case this.outgoingItems[2]:
          // return Number(this.$store.state.config.plats[2].id);
          return 33;
        case this.outgoingItems[3]:
          // return Number(this.$store.state.config.plats[1].id);
          return 32;
        default:
          return "";
      }
    },
    incomingId() {
      if (this.incoming.includes("主账户")) {
        return 0;
      }
      if (this.incoming.includes("新版")) {
        return 35;
      }
      if (this.incoming.includes("新锦江")) {
        return 32;
      }
      if (this.incoming.includes("MG")) {
        return 33;
      } else {
        return "";
      }
    }
  },
  watch: {
    outgoing(newValue) {
      this.incomingItems = this.outgoingItems.filter(item => item != newValue);
    },
    isLogin: function(toGet) {
      if (toGet) {
        this.getGameUrl("XJJ");
      }
    }
  },

  // watch: {
  //   isLogin: function(toGet) {
  //     if (toGet) {
  //       this.getGameUrl("XJJ");
  //     }
  //   }
  // },
  methods: {
    toDeposit() {
      this.$router.push("/depositarea");
    },
    toClassification() {
      this.$router.push("/classification");
    },
    link_membercenter() {
      this.$router.push("/membercenter");
    },
    transferBalance() {
      axios
        .post(
          `${this.$store.state.apiUrl}/order/transfer`,
          qs.stringify({
            inId: this.incomingId,
            outId: this.outgoingId,
            amount: this.amount
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          if (res.data.msg === "ok") {
            this.hasAlert = true;
            this.alertMessage = "成功";
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
        });
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
          this.outgoingItems.push(
            `${res.data.result.title} (${res.data.result.balance}元)`
          );
          this.isLoading = false;
          if (res.data.msg === "ok") {
          } else {
            this.hasError = true;
            this.errorMessage = res.data.msg;
          }
        });
    },

    getGameUrl(gamePlatformId, gameId = 0) {
      this.isLoading = true;
      axios
        .get(
          `${
            this.$store.state.apiUrl
          }/game/launchLottery?gamePlatformId=${gamePlatformId}&gameId=${gameId}`,
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          if (gamePlatformId === "XJJ") {
            this.urlXJJ = res.data.result.game_url;
          }
          if (gamePlatformId === "NJJ") {
            this.urlNJJ = res.data.result.game_url;
          }
          if (gamePlatformId === "MG") {
          }
          this.isLoading = false;
        });
    }
  },
  mounted() {
    if (this.isLogin) {
      this.getGameUrl("XJJ");
    }
  },
  created() {
    // this.transferBalance();
    this.getPlatformBalance(0);
    this.getPlatformBalance(32);
    this.getPlatformBalance(35);
    this.getPlatformBalance(33);
  }
};
</script>
