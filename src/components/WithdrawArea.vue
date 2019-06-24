<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay>
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
        </template>
        <v-card color="yellow darken-4">
          <v-toolbar color="yellow darken-4">
            <v-btn icon dark @click="link_membercenter">
              <i class="fas fa-arrow-left"></i>
            </v-btn>
            <v-toolbar-title class="white--text">提款专区</v-toolbar-title>
          </v-toolbar>
          <v-container>
            <v-card class="border_rounded py-1 px-1">
              <v-container>
                <v-alert :value="$store.state.userInfo.real_name === null" type="info" class="custo_border">
                  提款金额需要真实姓名
                  <v-btn
                    block
                    @click="redirectEditUserInfo"
                    class="blue lighten-4 custo_border"
                  >返回到设置真实姓名</v-btn>
                </v-alert>
                <v-alert :value="$store.state.userInfo.money_password === 'no'" type="info" class="custo_border">
                  提款金额需要提款密码
                  <v-btn
                    block
                    @click="redirectEditWithdrawPassword"
                    class="blue lighten-4 custo_border"
                  >返回到设置提款密码</v-btn>
                </v-alert>
                <v-alert :value="withdrawInfo.bankCardList.length < 1" type="info" class="custo_border">
                  提款金额需要银行卡
                  <v-btn
                    block
                    @click="redirectAddBankCard"
                    class="blue lighten-1 white--text custo_border"
                  >返回到添加银行卡</v-btn>
                </v-alert>
                <v-alert :value="withdrawInfo.need_xima != 0" type="info">剩余打码量需要为 0</v-alert>
                <v-alert :value="withdrawInfo.has_drawing != 0" type="info">提款在审核中，请通过后再次申请提款</v-alert>
              </v-container>
              <v-form ref="form" v-model="valid" class="px-4 pb-2">
                <v-flex>
                  <v-select
                    v-model="bankId"
                    prepend-icon="credit_card"
                    :items="withdrawInfo.bankCardList"
                    item-text="cardNumber"
                    :rules="bankRules"
                    item-value="id"
                    label="收款银行卡"
                    required
                  ></v-select>
                  <v-btn color="red darken-4 white--text" @click="addBankCardList">
                    <i class="fas fa-plus"></i>添加银行卡
                  </v-btn>
                </v-flex>
                <v-text-field
                  label="提款金额"
                  v-model="amount"
                  :rules="amountRules"
                  type="number"
                  prepend-icon="fas fa-coins"
                  required
                ></v-text-field>

                <v-text-field
                  label="取款密码"
                  v-model="password"
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required]"
                  :type="show ? 'text' : 'password'"
                  prepend-icon="lock"
                  @click:append="show = !show"
                  required
                ></v-text-field>

                <v-layout row wrap>
                  <v-flex xs12>
                    <v-btn
                      color="red darken-4 white--text"
                      :disabled="isDisabled"
                      block
                      @click.native="withdraw"
                    >立即提交</v-btn>
                  </v-flex>

                  <v-flex xs12>
                    <v-alert
                      v-model="hasAlert"
                      :value="true"
                      type="info"
                      icon="warning"
                      outline
                      dismissible
                      color="error"
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
  name: "WithdrawArea",
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      valid: false,
      alertMessage: "",
      hasAlert: false,
      bankId: "",
      show: false,
      amount: "",
      amountRules: [v => !!v || "请输入提款金额"],
      mainbankNumber: "",
      bankRules: [v => !!v || "请选择收款银行卡"],
      password: "",
      rules: {
        required: value => !!value || "请输入取款密码"
      },
      withdrawInfo: {
        balance: 0,
        name: "",
        accountPassword: false,
        bankCardList: [],
        balanceDay: 2000000,
        balanceStart: 100,
        balanceEnd: 200000,
        has_drawing: 0,
        today_num: 0,
        fee: 0,
        need_xima: 0
      }
    };
  },
  methods: {
    getWithdrawInfo(token) {
      axios
        .get(`${this.$store.state.apiUrl}/account/withdraw/init`, {
          headers: {
            "X-Auth-Token": token
          }
        })
        .then(res => {
          // console.log(res);
          this.withdrawInfo = res.data.result;
        });
      // .catch(err => console.log(err));
    },
    link_membercenter() {
      this.$router.push("/membercenter");
    },
    addBankCardList() {
      this.$router.push("/addbankcardlist");
    },
    redirectEditUserInfo() {
      this.$router.push("/userinfo");
    },
    redirectEditWithdrawPassword() {
      this.$router.push("/userinfo");
    },
    redirectAddBankCard() {
      this.$router.push("/addbankcardlist");
    },

    withdraw() {
      axios
        .post(
          `${this.$store.state.apiUrl}/account/withdraw/`,
          qs.stringify({
            bank_id: this.bankId,
            accountPassword: this.password,
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
  },
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    },
    token() {
      return this.$store.state.token;
    },
    showForm() {
      if (
        // this.$store.state.userInfo.real_name != null &&
        this.$store.state.userInfo.money_password === "yes" &&
        this.withdrawInfo.bankCardList.length > 0 &&
        this.withdrawInfo.need_xima == 0 &&
        this.withdrawInfo.has_drawing == 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    token(data) {
      this.getWithdrawInfo(data);
    }
  },
  mounted() {
    if (this.$store.state.token.length > 10) {
      this.getWithdrawInfo(this.$store.state.token);
      // console.log(this.$store.state.token)
    }
  },
  created() {
    this.checkToken();
  }
};
</script>
<style scoped>
.border_rounded {
  border-radius: 10px;
}
.custo_border {
  border-radius: 10px;
}
</style>
