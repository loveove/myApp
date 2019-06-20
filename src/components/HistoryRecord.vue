<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay>
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
        </template>
        <v-card color="yellow darken-4">
          <v-toolbar dark color="yellow darken-4">
            <v-btn icon dark @click="link_membercenter" class="font-custo">
              <i class="fas fa-arrow-left"></i>
            </v-btn>
            <v-toolbar-title>历史记录</v-toolbar-title>
          </v-toolbar>
          <v-tabs v-model="active" color="red darken-4" dark slider-color="yellow" grow>
            <v-tab v-for="item in items" :key="item.content" ripple class="custo_font">{{item.name}}</v-tab>
            <v-tab-item v-for="item in items" :key="item.content">
              <div :is="item.content"></div>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";

import DepositHistory from "./DepositHistory";
import WithdrawHistory from "./WithdrawHistory";
import TransferHistory from "./TransferHistory";
import BetHistory from "./BetHistory";
import FundHistory from "./FundHistory";

export default {
  mixins: [ApiCheckTokenMixin],

  name: "HistoryRecord",
  components: {
    DepositHistory,
    FundHistory,
    TransferHistory,
    BetHistory,
    WithdrawHistory
  },
  data() {
    return {
      active: null,
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          name: "存款记录",

          content: `DepositHistory`
        },
        {
          name: "提款记录",

          content: `WithdrawHistory`
        },
        {
          name: "转账记录",

          content: `TransferHistory`
        },
        {
          name: "投注记录",

          content: `BetHistory`
        },
        {
          name: "资金记录",

          content: `FundHistory`
        }
      ]
    };
  },

  methods: {
    link_membercenter() {
      this.$router.push("/membercenter");
    }
  },
  created() {
    this.checkToken();
  }
};
</script>
<style scope>
.custo_font {
  font-size: 13px;
}
</style>
