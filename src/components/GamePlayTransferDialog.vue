<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-layout xs12 row wrap>
        <v-flex xs10>
          <v-card-title>
            <span class="white--text">财务互转</span>
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
                required:items="items"
              ></v-select>
            </v-flex>

            <v-text-field
              v-model="amount"
              :rules="amountRules"
              label="金额 "
              prepend-icon="fas fa-coins"
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
            <!-- <v-btn color="red darken-4 white--text" small :href="urlXJJ">直接游戏</v-btn> -->
            <a href="urlXJJ" color="red darken-4 white--text" target="_blank">Link</a>
          </v-flex>
          <!-- </v-card-actions> -->
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
// import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";
import axios from "axios";
const qs = require("qs");
export default {
  // mixins: [ApiCheckTokenMixin],
  name: "GamePlayTransferDialog",
  data: () => ({
    alertMessage: "",
    hasAlert: false,
    dialog: true,
    notifications: false,
    sound: true,
    widgets: false,
    outgoingItems: ["主账户", "新锦江", "MG", "新锦江（新版）"],
    incomingItems: [],
    isLoading: false,
    valid: false,
    amount: "",
    amountRules: [v => !!v || "amount is required"],
    outgoing: "",

    incoming: "",
    urlXJJ: "",
    urlNJJ: "",
    isLoading: false
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    },
    outgoingId() {
      switch (this.outgoing) {
        case "主账户":
          return 0;
        case "新锦江":
          // return Number(this.$store.state.config.plats[0].id);
          return 32;
        case "新锦江（新版）":
          // return Number(this.$store.state.config.plats[2].id);
          return 35;
        case "MG":
          // return Number(this.$store.state.config.plats[1].id);
          return 33;
        default:
          return "";
      }
    },
    incomingId() {
      switch (this.incoming) {
        case "主账户":
          return 0;
        case "新锦江":
          // return Number(this.$store.state.config.plats[0].id);
          return 32;
        case "新锦江（新版）":
          // return Number(this.$store.state.config.plats[2].id);
          return 35;
        case "MG":
          // return Number(this.$store.state.config.plats[1].id);
          return 33;
        default:
          return "";
      }
    }
  },
  watch: {
    outgoing(newValue) {
      this.incomingItems = this.outgoingItems.filter(item => item != newValue);
    }
  },
  computed: {
    isLogin: function() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    isLogin: function(toGet) {
      if (toGet) {
        this.getGameUrl("XJJ");
      }
    }
  },
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
          // console.log(res);
          if (res.data.msg === "ok") {
            this.hasAlert = true;
            this.alertMessage = "成功";
            // console.log(res.data);
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
        });
      // .catch(err => console.log(err));
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
            console.log(res.data);
            // console.log(this.urlXJJ)
          }
          if (gamePlatformId === "NJJ") {
            this.urlNJJ = res.data.result.game_url;
            // console.log(res.data)
          }
          if (gamePlatformId === "MG") {
            // console.log(res.data);
          }
          this.isLoading = false;
        });
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    if (this.isLogin) {
      this.getGameUrl("XJJ");
    }
  }
  // created() {
  //   this.checkToken();
  // }
};
</script>
