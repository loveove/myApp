<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
        <v-btn round small color="red darken-4 mt-4" class="mr-5" dark v-on="on">开始游戏</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">财务互转</span>
        </v-card-title>
        <v-card-text>
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

            <v-layout row wrap>
              <v-flex xs12>
                <v-btn
                  :disabled="isDisabled"
                  color="red darken-4 white--text"
                  :loading="isLoading"
                  block
                  @click.native="transferBalance"
                >确定转账</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import axios from "axios";
const qs = require("qs");
export default {
  data: () => ({
    dialog: false,

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

    incoming: ""
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
  methods: {
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
    }
  }
};
</script>