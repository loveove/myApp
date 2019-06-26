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
            <v-toolbar-title>平台互转</v-toolbar-title>
          </v-toolbar>
          <v-container>
            <v-card class="custo_border py-2">
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
                  <v-flex xs12>
                    <v-alert
                      v-model="hasAlert"
                      :value="true"
                      type="info"
                      icon="warning"
                      outline
                      dismissible
                    >{{alertMessage}}</v-alert>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-card>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";
import axios from "axios";
const qs = require("qs");
export default {
  mixins: [ApiCheckTokenMixin],
  name: "PlatformTransfer",
  data() {
    return {
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
      outgoing: "",
      incoming: ""
    };
  },
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
            outId: this.outgoingId,
            inId: this.incomingId,
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
            location.reload();
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
          // console.log(res);
          if (res.data.msg === "ok") {
          } else {
            this.hasError = true;
            this.errorMessage = res.data.msg;
          }
        });
    }
  },

  created() {
    this.checkToken();
    this.getPlatformBalance(0);
    this.getPlatformBalance(32);
    this.getPlatformBalance(35);
    this.getPlatformBalance(33);
  }
};
</script>
<style scope>
.custo_border {
  border-radius: 10px;
}
</style>
