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
          <v-card class="custo_border">
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

              <v-container fluid>
                <v-layout row>
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
              </v-container>
            </v-form>
          </v-card>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
import axios from "axios";
const qs = require("qs");
export default {
  name: "PlatformTransfer",
  data() {
    return {
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
          console.log(res);
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
<style scope>
.custo_border {
  margin: 10px;
}
</style>

